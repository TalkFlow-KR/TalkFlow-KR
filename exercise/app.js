//녹음을 하기 위함.
require("dotenv").config(); // process.env.xxx
const fs = require("fs");
const ffmpeg = require("fluent-ffmpeg");
const mic = require("mic");
const { Readable } = require("stream");
const ffmpegPath = require("@ffmpeg-installer/ffmpeg").path;

// 서버를 유지하기 위함.
const express = require("express");
const app = express();
const port = 3000;
// 
//chatgpt를 연결하기 위함.
const { Configuration, OpenAIApi } = require("openai");
const axios = require("axios");
const configuration = new Configuration({
  apiKey: process.env.CHATGPT_API_KEY,
});
const openai = new OpenAIApi(configuration);
let flag = 0;

ffmpeg.setFfmpegPath(ffmpegPath);

// Serve static files from the "public" directory
app.use(express.static("public"));
app.set("view engine", "ejs");

// Record audio
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
        await new Promise((resolve) => setTimeout(resolve, 1000)); // Wait for 1 second
        console.log("녹음 중 입니다. : flag = 0");
      }

      console.log("녹음을 종료합니다.. : flag = 1");
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

// Transcribe audio
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

let main = require("./chatGPT.js"); // Gpt 불러옴

messages = [
  {
    role: "system",
    content:
      "You are a conversation practice bot. Take on any role you want and talk to me.",
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
    // res.sendStatus(200);

    //녹음이 종료됐음을 알기 위한 플레그.
    flag = 0;
    console.log("녹음 종료되었습니다.");
  });
});

app.get("/stop", async (req, res) => {
  console.log("-----번역을 시작합니다.------");
  const transcription = await transcribeAudio(newFilename);
  res.json({ transcription });
  console.log(transcription);
  //번역이 끝났음을 알기 위함.
  flag = 1;
  console.log(`2, ${transcription}`);
  messages.push({ role: "user", content: transcription });
});

app.get("/chat", async (req, res) => {
  const answer = await main(messages); // 질문이 gpt에 들어가고, 대답이 나옴
  messages.push({ role: "assistant", content: answer });
  console.log("대답 >>> ", answer);
  console.log(messages);
  res.json({ answer }); // 대답을 뿌려줌
});

// Start the server
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
