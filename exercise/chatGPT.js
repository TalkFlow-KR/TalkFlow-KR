const { Configuration, OpenAIApi } = require("openai");
require("dotenv").config(); // process.env.xxx

const configuration = new Configuration({
  apiKey: process.env.CHATGPT_API_KEY,
});
const openai = new OpenAIApi(configuration);

const main = async (messages, userMsg) => {
  res = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: messages,
  });

  console.log("ChatGPT Prompt >>> ", messages);

  ans = res.data.choices[0].message.content;

  return ans;
};

module.exports = main;
