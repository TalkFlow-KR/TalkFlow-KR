const models = require('../models')

// gpt setting
const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
  apiKey: "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",
});
const openai = new OpenAIApi(configuration);

// 녹음을 하기 위함
const fs = require("fs");
const ffmpeg = require("fluent-ffmpeg");
const mic = require("mic");
const { Readable } = require("stream");
const ffmpegPath = require("@ffmpeg-installer/ffmpeg").path;
ffmpeg.setFfmpegPath(ffmpegPath);

let newFilename;

// 녹음이 언제 종료되는지 알려준 뒤, 녹음을 종료함.
async function waitForFlag(flag) {
  while (flag === 0) {
    await new Promise((resolve) => setTimeout(resolve, 1000)); // while 루프 내에서 플래그 변수를 다시 확인하기 전에 1초의 지연을 도입하는 데 사용됩니다. 이렇게 하면 루프에서 과도한 CPU 사용을 방지하고 프로그램이 플래그가 변경되기를 기다리는 동안 다른 작업을 수행할 수 있습니다
    console.log("녹음 중 입니다. : flag =", flag);
  }
  console.log("녹음을 종료합니다. : flag =", flag);
  micInstance.stop();

  deleteRecordedAudio(filename); // 녹음이 종료되면 생성된 파일을 삭제함
  resolve();
}

function recordAudio(filename) {
    return new Promise((resolve, reject) => {
      const micInstance = mic({
        rate: "16000",
        channels: "1",
        fileType: "wav",
      });
  
      const micInputStream = micInstance.getAudioStream();
      const output = fs.createWriteStream(filename);
      const writable = new Readable().wrap(micInputStream);
  
      writable.pipe(output);
      console.log("녹음을 시작합니다..");
      micInstance.start();
    
      waitForFlag(0); // flag = 0
  
      micInputStream.on("error", (err) => {
        reject(err);
      });
    });
  }
  
  // Transcribe Audio
  async function transcribeAudio(filename) {
    const transcript = await openai.createTranscription(
      fs.createReadStream(filename), //번역할 파일
      "whisper-1", //사용할 모델
      undefined, // the prompt to use for transcription
      "json", // the format of the transcription
      1, // temperture
      "en" //language en, es, fr, it, de, ja, ko, nl, pl, pt , ru ,zh-cn, zh-tw
    );
    return transcript.data.text;
  }
  
  function deleteRecordedAudio(filename) {
    fs.unlink(filename, (err) => {
      if (err) {
        console.error(err);
      } else {
        console.log(`성공적으로 파일을 삭제했습니다. ${filename}`);
      }
    });
  }

exports.sst = (req,res)=>{
  res.render("voice")
}

// 녹음 버튼 눌렀을때(녹음 파일 생성)
exports.start = (req,res)=>{
  console.log("/start에 접근하였습니다.");
  //새로운 파일이름을 만들어주기 위함. 변수는 전역변수로 설정
  const now = new Date();
  newFilename = `recorded_audio_${now.getFullYear()}-${
    now.getMonth() + 1
  }-${now.getDate()}_${now.getHours()}-${now.getMinutes()}-${now.getSeconds()}.wav`;

  recordAudio(newFilename).then(() => {
    //녹음이 종료됐음을 알기 위한 플레그.
    console.log("녹음 종료되었습니다.");
    // res.json(flag);
    res.end();
  });
}

// 중단 버튼 눌렀을때
exports.stop = async(req,res) =>{
  console.log("-----번역을 시작합니다.------");
  const transcription = await transcribeAudio(newFilename); // 음성파일 -> whisper -> return text(문자열)
  console.log(transcription);
  //번역이 끝났음을 알기 위함.
  waitForFlag(1)
  res.send(transcription) // front에게 인식한 음성메시지(text) 반환
}

// 답변
exports.runGPT35 = async (req,res) => {
  // ROOM 테이블에 저장된 정보 받아오기
    const {roomid} = req.params;
    const result = await models.ROOM.findOne({
        where:{
            room_id : roomid
        }
    })
    console.log(result)

    if(result.length()>0){ // ROOM 테이블이 비어있지 않다면
      let message = []
      for(let i=0; i<result.length(); i++){
        message.push({ role: result[i].part_id, content: result[i].content})
      }
      // 방에 저장된 상황,말투,언어로 msg 설정
      const response = await openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: message.push({ role: "user", content: req.body.msg})
      });
      console.log('response >>>',response)
    }
    else{ // ROOM 테이블이 비었다면
      const msg = "You are a conversation practice bot. Take on any role you want and talk to me."
      const response = await openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: [{ role: system, content: msg},{ role: "user", content: req.body.msg}]
      });
      // DB 추가
      const msg_system_result = await models.MSG.create({
        part_id : "system",
        content : msg,
        room_id : roomid
      })
    }

    const msg_user_result = await models.MSG.create({
        part_id : "user",
        content : req.body.msg,
        room_id : roomid
    })
    const msg_gpt_result = await models.MSG.create({
        part_id : response.data.choices[0].message.role,
        content : response.data.choices[0].message.content,
        room_id : roomid
    })
    
    res.send(response.data.choices[0].message.content); // 답변 반환
};




