const gTTS = require("gtts");
const path = require("path");
const util = require("util");

const gttsSave = util.promisify(gTTS.prototype.save);

const tts = async (text, filename) => {
  let speech = text;
  const gtts = new gTTS(speech);
  const filePath = path.join(__dirname, "./public", filename);

  try {
    await gttsSave.call(gtts, filePath);
    console.log("Text to speech converted!");
  } catch (err) {
    throw new Error(err);
  }
};

module.exports = tts;
