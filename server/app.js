const express = require("express");
const app = express();
// const cors = require("cors");
const PORT = 8000;

// app.use(cors());
app.set("view engine", "ejs");
app.use("/views", express.static(__dirname + "/views")); // ejs를 담을 views 폴더 경로 설정
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const speakRouter = require("./routes/speak");

app.use("/", speakRouter);
app.use("/sst", speakRouter);

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
