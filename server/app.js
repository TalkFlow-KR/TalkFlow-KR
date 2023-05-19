const express = require("express");
const path = require("path");
const app = express();
const cors = require("cors");
const PORT = 8000;

app.use(cors());
app.set("view engine", "ejs");
app.use(express.static(path.join("../client/build")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const speakRouter = require("./routes/speak");

app.use("/", speakRouter);

app.get("/", (req, res) => {
  res.sendFile(path.join("../client/build/index.html"));
});

app.get("*", function (req, res) {
  res.sendFile(path.join("../client/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
