const models = require('../models')
const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
  apiKey: "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",
});
const openai = new OpenAIApi(configuration);

// 질문 받은거 반환
exports.runGPT35 = async (req,res) => {
    const msg = "I'm going to practice movie dialogues from now on. You are a doctor and I am a patient. answer me like a doctor"
    const {roomid} = req.params;
    const result = await models.ROOM.findOne({
        where:{
            room_id : roomid
        }
    })
    console.log(result)
    const response = await openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: [{ role: "system", content: msg },
        { role: "user", content: req.body.msg}]
            
    });
    console.log('response >>>',response)
    const msg_system_result = await models.MSG.create({
        part_id : "system",
        content : msg,
        room_id : roomid
    })
    const msg_user_result = await models.MSG.create({
        part_id : "user",
        content : req.body.msg,
        room_id : roomid
    })
    const msg_gpt_result = await models.MSG.create({
        part_id : response.data.choices[0].message.role,
        content : response.data.choices[0].message.content,
        room_id : roomid
    })
    
    res.send(response.data.choices[0].message.content);
};




