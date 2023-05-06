const express = require("express");
const app = express();
// const cors = require("cors");
const PORT = 8000;

// app.use(cors());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const speakRouter = require("./routes/speak");
app.use("/api", speakRouter);

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});


