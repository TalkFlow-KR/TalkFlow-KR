// API 키를 dot.env에 보관하기 위함.
require("dotenv").config();

// 서버를 유지하기 위함.
const express = require("express");
const app = express();
var cors = require("cors");

// 초기값 세팅
messages = [
  {
    role: "system",
    content:
      "You are a conversation practice bot. Take on any role you want and talk to me. Answer concisely in one or two sentences if possible, and ask questions from time to time.",
  },
];

// js파일 경로 설정
let main = require("./chatGPT.js"); // Gpt 불러옴

let id = 0;

const reactMsg = [];

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("hello world");
});

app.get("/api/todo", (req, res) => {
  res.json(reactMsg);
});

app.post("/api/todo", async (req, res) => {
  const { text } = req.body;
  console.log(text);
  messages.push({ role: "user", content: text });
  const answer = await main(messages);
  messages.push({ role: "assistant", content: answer });
  console.log(messages);

  reactMsg.push({
    id: id++,
    text,
    answer,
  });
  return res.send("success");
});

const port = process.env.PORT || 8000;
app.listen(port, () => console.log(`http://localhost:${port}`));
