//ChatRoomComponent.jsx
import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import RoomTitle from "../m/RoomTitle";
import Lottie from "components/atoms/LottieComponent";
import animationData from "assets/micIdle.json";
import { MicButton } from "styles/Chat.styled";
import LogoIcon from "../atoms/LogoIcon";

// stt , tts
import useSpeechRecognition from "assets/useSpeechRecognition";
import useSpeechSynthesis from "assets/useSpeechSynthesis";

// axios
import axios from "axios";

const Wrapper = styled.section`
  flex: 1 1 0;
  height: 50vh;
  //width: 44.4rem;
  //height: 56.2rem;
  //margin: 1.4rem;
  background-color: #ddd;
  /* background-color: tomato; */
  border-radius: 2rem;
  //padding: 1.6rem;
  margin: 2rem;
  //overflow-y: hidden;
  /* overflow: auto; */
`;

const InputForm = styled.form`
  display: flex;
`;

const ChatBox = styled.article`
  position: relative;
  ////height: 1rem;
  /* ////height: 40rem; */
  background-color: ${({ theme }) => theme.color.bg300};
  /* background-color: teal; */
  height: 30vh;
  margin: 2rem;
  border-radius: 2rem;
  overflow: scroll;
`;

const InputComponent = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ChatInput = styled.input`
  width: 90%;
  height: 3rem;
  margin: 1rem;
  border-radius: 1rem;
  border: 0;
  justify-content: center;

  box-shadow: 0 0.3rem 1rem rgba(0, 0, 0, 0.25);
`;

// const micIdle = styled.button``;

const AI = styled.p`
  display: inline-block;
  width: 100%;
  padding: 0.8rem;
  font-size: 1.6rem;
  border-radius: 0.8rem;

  & span {
    display: inline-block;
    left: 0;
    background-color: lightblue;
    border-radius: 0.8rem;
    padding: 0.8rem;
  }
`;
const User = styled.p`
  display: inline-block;
  position: relative;
  width: 100%;
  padding: 0.8rem;
  //background-color: tan;
  font-size: 1.6rem;
  border-radius: 0.8rem;

  & span {
    position: relative;
    display: inline-block;
    float: right;
    right: 0;
    top: 0;
    background-color: lightcoral;
    border-radius: 0.8rem;
    padding: 0.8rem;
  }
`;

const sendChatToServer = async (message) => {
  try {
    const res = await axios.post("/CR", {
      message,
    });
    console.log("axios", res.data);
  } catch (error) {
    console.error(error);
  }
};

// const handleSendClick = () => {
//   if (inputValue.trim()) {
//     const newMessage = {
//       id: Date.now(),
//       text: inputValue,
//     };
//     setMessageList([...messageList, newMessage]);
//     setInputValue("");
//     setMessage("");
//     sendChatToServer(inputValue); // Call the sendChatToServer function
//   }
// };

const CR = ({ data, userId, roomId }) => {
  console.log("userId입니다.", userId);
  const [text, setText] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [message, setMessage] = useState("");
  const messagesEndRef = useRef(null);
  const [messageList, setMessageList] = useState([
    // {
    //   id: 1,
    //   text: "test",
    // },
    // {
    //   id: 2,
    //   text: "2023",
    // },
    // { id: 3, text: "0513" },
  ]);

  //------------------------------추---------------------------------//
  //------------------------------가---------------------------------//
  //------------------------------작---------------------------------//
  //------------------------------업---------------------------------//
  //------------------------------시---------------------------------//
  //------------------------------작---------------------------------//

  const [lang, setLang] = useState("en-AU");

  const onEnd = () => {
    // 녹음이 끝난 후, 실행 할 함수를 추가할 수 있습니다.
    // console.log(gptAns);
    // speak({ text: gptAns });
    console.log("onEnd  : ", "녹음이 끝났습니다.");
  };

  const onResult = (result) => {
    console.log("on Result (번역 결과) : ", result);
    setInputValue(result);
  };

  const changeLang = (event) => {
    console.log("changeLang : ", event.target.value);
    setLang(event.target.value);
  };

  const { speak } = useSpeechSynthesis();
  const { listen, listening, stop } = useSpeechRecognition({
    onResult,
    onEnd,
  });

  //------------------------------추---------------------------------//
  //------------------------------가---------------------------------//
  //------------------------------작---------------------------------//
  //------------------------------업---------------------------------//
  //------------------------------시---------------------------------//
  //------------------------------작---------------------------------//

  useEffect(() => {
    setText([...text, data.ai.answer]);
  }, []);
  useEffect(() => {
    messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
  }, [messageList]);

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      // Send the message
      console.log("Sending message:", inputValue);
      if (inputValue.trim()) {
        const newMessage = {
          id: Date.now(),
          text: inputValue,
        };
        // time;
        setMessageList([...messageList, newMessage]);
        setInputValue("");
        setMessage("");
      }
    }
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    setMessage(e.target.value);
  };

  const handleSendClick = () => {
    if (inputValue.trim()) {
      const newMessage = {
        id: Date.now(),
        text: inputValue,
      };
      setMessageList([...messageList, newMessage]);
      setInputValue("");
      setMessage("");
      sendChatToServer(inputValue); // Call the sendChatToServer function
    }
  };

  // useEffect(() => {
  //   fetch(`http://localhost:5000/room/make/${userid}`)
  //     .then((res) => res.json())
  //     .then((data) => setMessageList(data));
  // }, []);

  //**************** */ CR 채팅 보내기

  // const OnSubmitHandler = (e) => {
  //   e.preventDefault();
  //   axios
  //     .post(`http://localhost:5000/chat/${userid}/${roomid}`, {
  //       msg: inputValue,
  //     })
  //     .then((res) => {
  //       console.log(res);
  //     });
  // };

  return (
    <Wrapper>
      <RoomTitle />
      <ChatBox>
        {messageList.map((message) => (
          <AI key={message.id}>
            <span>{message.text}</span>
          </AI>
          // (
          //   <User key={message.id}>
          //     <span>{message.text}</span>
          //   </User>
          // )
        ))}
        <div ref={messagesEndRef} />
        <InputComponent>
          {/* <InputForm onSubmit={OnSubmitHandler}> */}
          <ChatInput
            type="text"
            name="text"
            value={inputValue}
            onChange={handleInputChange}
            onKeyPress={handleKeyDown}
            placeholder="메시지를 입력하세요.">
            {/* <button></button> */}
          </ChatInput>
          {/* </InputForm> */}
          <button
            onClick={handleSendClick}
            style={{
              width: "3rem",
              height: "3rem",
              borderRadius: "50%",
              transform: "translate(-5rem, 1rem)",
              backgroundColor: "#fff",
              boxShadow: " 0 -0.7rem 1rem rgba(0, 0, 0, 0.25);",
              // border: "1px solid black",
            }}>
            <LogoIcon />
          </button>
          <MicButton
            onMouseDown={() => {
              listen({ lang: lang, maxAlternatives: 10000 });
            }}
            onMouseUp={stop}>
            <Lottie animationData={animationData} />
          </MicButton>
        </InputComponent>
      </ChatBox>
    </Wrapper>
  );
};

export default CR;
