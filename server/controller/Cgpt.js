const models = require('../models')
const { Configuration, OpenAIApi } = require('openai');
const configuration = new Configuration({
  apiKey: '', // openai api key
});
const openai = new OpenAIApi(configuration);

exports.stt = (req,res)=>{
  res.render('voice')
}

// 답변
exports.runGPT35 = async (req,res) => {
  // ROOM 테이블에 저장된 정보 받아오기
    const roomid = req.params.roomid;
    const result = await models.MSG.findOne({
        where:{
            room_id : roomid
        }
    })
    console.log(result)

    if(result.length()>0){ // ROOM 테이블이 비어있지 않다면
      let message = []
      for(let i=0; i<result.length(); i++){
        message.push({ role: result[i].part_id, content: result[i].content})
      }
      // 방에 저장된 상황,말투,언어로 msg 설정
      const response = await openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: message.push({ role: "user", content: req.body.msg})
      });
      console.log('response >>>',response)
    }
    else{ // ROOM 테이블이 비었다면
      const msg = "You are a conversation practice bot. Take on any role you want and talk to me."
      const response = await openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: [{ role: system, content: msg},{ role: "user", content: req.body.msg}]
      });
      // DB 추가
      const msg_system_result = await models.MSG.create({
        part_id : "system",
        content : msg,
        room_id : roomid
      })
    }

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
    
    res.send(response.data.choices[0].message.content); // 답변 반환
};




