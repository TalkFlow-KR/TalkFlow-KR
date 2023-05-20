const express = require("express");
const path = require('path')
const app = express();
const cors = require("cors");
require('dotenv').config()

app.use(cors());
app.use(express.static(path.join('../client/build')))
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const speakRouter = require("./routes/speak");
const gptRouter = require("./routes/gpt");

app.use("/", speakRouter);
app.use("/", gptRouter);

app.get('/',(req,res)=>{
  res.sendFile(path.join('../client/build/index.html'))
})



app.listen(process.env.PORT, () => {
  console.log(`http://localhost:${process.env.PORT}`);
});

