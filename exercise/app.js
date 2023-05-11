// API 키를 dot.env에 보관하기 위함.
require("dotenv").config();

// 서버를 유지하기 위함.
const express = require("express");
const app = express();
const port = 3000;

// chatgpt를 연결하기 위함.
const { Configuration, OpenAIApi } = require("openai");
const axios = require("axios");
const configuration = new Configuration({
  apiKey: process.env.CHATGPT_API_KEY,
});
const openai = new OpenAIApi(configuration);

// 녹음을 하기 위함
const fs = require("fs");
const ffmpeg = require("fluent-ffmpeg");
const mic = require("mic");
const { Readable } = require("stream");
const ffmpegPath = require("@ffmpeg-installer/ffmpeg").path;
ffmpeg.setFfmpegPath(ffmpegPath);

// Serve static files from the "public" directory
app.use(express.static("public"));
app.set("view engine", "ejs");

let flag = 0;

// Record Audio
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

    // 녹음이 언제 종료되는지 알려준 뒤, 녹음을 종료함.
    async function waitForFlag() {
      while (flag === 0) {
        await new Promise((resolve) => setTimeout(resolve, 1000)); // while 루프 내에서 플래그 변수를 다시 확인하기 전에 1초의 지연을 도입하는 데 사용됩니다. 이렇게 하면 루프에서 과도한 CPU 사용을 방지하고 프로그램이 플래그가 변경되기를 기다리는 동안 다른 작업을 수행할 수 있습니다
        recFlag = 1;
        console.log("녹음 중 입니다. : flag =", flag);
      }

      console.log("녹음을 종료합니다. : flag =", flag);
      recFlag = 0;
      micInstance.stop();

      deleteRecordedAudio(filename); // 녹음이 종료되면 생성된 파일을 삭제함
      resolve();
    }
    waitForFlag();

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
      console.log(`성공적으로 음성 파일을 삭제했습니다. ${filename}`);
    }
  });
}

let main = require("./chatGPT.js"); // Gpt 불러옴
let testToSpeech = require("./textToSpeech.js"); // text-to-speech 불러옴
let listFiles = require("./listFiles.js");

function clearPublicFolder() {
  let i;
  listFiles()
    .then((files) => {
      console.log("files >>", files);
      // 파일 목록을 사용하여 작업 수행
      for (i = 0; i < files.length - 1; i++) {
        console.log(files[i], "이 삭제되었습니다.");
        let deleteFile = files[i];
        deleteRecordedAudio1(deleteFile);
      }
    })
    .catch((err) => {
      console.error(err);
    });
}

const path = require("path");
const { clear } = require("console");
const { CLIENT_RENEG_LIMIT } = require("tls");

function deleteRecordedAudio1(filename) {
  const filePath = path.join(__dirname, "./public", filename);
  try {
    fs.unlinkSync(filePath);
  } catch (err) {
    console.log(err);
  }
}

async function tts(gptMsg) {
  const now = new Date();
  newFilename2 = `recorded_audio_${now.getFullYear()}-${
    now.getMonth() + 1
  }-${now.getDate()}_${now.getHours()}-${now.getMinutes()}-${now.getSeconds()}.mp3`;
  await testToSpeech(gptMsg, newFilename2);
  console.log(newFilename2);
}

messages = [
  {
    role: "system",
    content:
      "You are a conversation practice bot. Take on any role you want and talk to me. Answer concisely in one or two sentences if possible, and ask questions from time to time.",
  },
];

// Routes
app.get("/", (req, res) => {
  res.render("index");
});

app.get("/start", (req, res) => {
  console.log("/start에 접근하였습니다.");
  //새로운 파일이름을 만들어주기 위함. 변수는 전역변수로 설정
  const now = new Date();
  newFilename = `recorded_audio_${now.getFullYear()}-${
    now.getMonth() + 1
  }-${now.getDate()}_${now.getHours()}-${now.getMinutes()}-${now.getSeconds()}.wav`;

  recordAudio(newFilename).then(() => {
    //녹음이 종료된 후, flag 초기화
    flag = 0;
    console.log("녹음 종료되었습니다.");
    res.json(flag);
  });
});

app.get("/stop", async (req, res) => {
  console.log("-----번역을 시작합니다.------");
  const transcription = await transcribeAudio(newFilename);
  res.json({ transcription });
  console.log("텍스트 변환 완료", transcription, "falg = ", flag);
  //번역이 끝났음을 알기 위함.
  // TODO: 음성 파일 삭제하기
  clearPublicFolder();

  flag = 1;
  console.log(`2, ${transcription}`);
  messages.push({ role: "user", content: transcription });
});

app.get("/chat", async (req, res) => {
  const answer = await main(messages); // 질문이 gpt에 들어가고, 대답이 나옴
  messages.push({ role: "assistant", content: answer });
  console.log("대답 >>> ", answer);
  console.log(messages);
  await tts(answer);
  console.log("녹음완료");
  res.json({ answer, newFilename2 }); // 대답을 뿌려줌
});

app.get("/delete", async (req, res) => {
  console.log("/delete 접근");
  await deleteRecordedAudio1(newFilename2);
  console.log("삭제 완료");
  res.json(); // 보여주기용.
});

// Start the server
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
