const models = require("../models");
const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
  apiKey: "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", // openai api key
});
const openai = new OpenAIApi(configuration);

exports.msg = async (req, res) => {
  const userid = req.params.userid;
  const roomid = req.params.roomid;

  const result = await models.MSG.findAll({
    raw: true,
    where: {
      room_id: roomid,
      user_id: userid,
    },
  });
  let newMsg = [];
  for (let i = 0; i < result.length; i++) {
    const { msg_id, room_id, user_id, ...others } = result[i];
    newMsg.push(others);
  }
  res.send(newMsg);
};

// 답변
exports.runGPT35 = async (req, res) => {
  // MSG 정보 가져오기
  const userid = req.params.userid;
  const roomid = req.params.roomid;

  const result = await models.MSG.findAll({
    raw: true,
    where: {
      room_id: roomid,
      user_id: userid,
    },
  });
  console.log("res: ", result); // [ {}, {}, {}, ... ]

  if (result.length > 0) {
    // MSG 테이블이 비어있지 않다면
    let newMsg = [];
    for (let i = 0; i < result.length; i++) {
      newMsg.push({ role: result[i].part_id, content: result[i].content });
    }

    // 과거내역 불러오기
    const response = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [...newMsg, { role: "user", content: req.body.msg }],
    });

    await models.MSG.create({
      part_id: "user",
      content: req.body.msg,
      room_id: roomid,
      user_id: userid,
    });
    await models.MSG.create({
      part_id: response.data.choices[0].message.role,
      content: response.data.choices[0].message.content,
      room_id: roomid,
      user_id: userid,
    });
    res.send(response.data.choices[0].message.content); // 답변 반환
  } else {
    // MSG 테이블이 비었다면 ROOM에 저장된 세팅 값으로 gpt 세팅
    const settings = await models.ROOM.findOne({
      raw: true,
      where: {
        room_id: roomid,
      },
    });
    console.log("set :", settings);
    const situation = settings.situation;
    const accent = settings.accent;
    const language = settings.language;

    const msg = `Let's play a role play. you can play any role in ${situation}.
                   but you have to talk with ${language} and please speak with ${accent}.`;

    const response = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [
        { role: "system", content: msg },
        { role: "user", content: req.body.msg },
      ],
    });

    // DB 추가
    await models.MSG.create({
      part_id: "system",
      content: msg,
      room_id: roomid,
      user_id: userid,
    });

    await models.MSG.create({
      part_id: "user",
      content: req.body.msg,
      room_id: roomid,
      user_id: userid,
    });

    await models.MSG.create({
      part_id: response.data.choices[0].message.role,
      content: response.data.choices[0].message.content,
      room_id: roomid,
      user_id: userid,
    });
    res.send(response.data.choices[0].message.content); // 답변 반환
  }
};
