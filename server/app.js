const express = require("express");
const app = express();
const cors = require("cors");
const session = require("express-session"); 
const dotenv = require('dotenv');
const PORT = 8000;
dotenv.config();

app.use(cors());
app.set("view engine", "ejs");
app.use("/views", express.static(__dirname + "/views")); // ejs를 담을 views 폴더 경로 설정
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// 세션 설정
app.use(
  session({
    secret: process.env.SECRET_KEY, // 세션 암호화에 사용될 키
    resave: false, // 세션을 강제로 저장할지 여부
    saveUninitialized: true, // 초기화되지 않은 세션을 저장할지 여부
    cookie: {
      secure: false, // https를 사용하는 경우 true
      maxAge: 1000 * 60 * 60 , // 쿠키 유효시간 (1시간)
    },
  })
);

const speakRouter = require("./routes/speak");


// app.use("/api", speakRouter);

app.use("/", speakRouter);
// app.use("/sst", speakRouter);
// app.use("/kakao", speakRouter);

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});

