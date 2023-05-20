//ChatRoomComponent.jsx
import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import RoomTitle from "../m/RoomTitle";
import Lottie from "components/atoms/LottieComponent";
import animationData from "assets/micIdle.json";
import { MicButton } from "styles/Chat.styled";

// stt , tts
import useSpeechRecognition from "assets/useSpeechRecognition";
import useSpeechSynthesis from "assets/useSpeechSynthesis";

// axios
import axios from "axios";
import { IoIosSend } from "react-icons/io";

const Wrapper = styled.section`
  width: 100%;
  flex: 1 1 0;
  position: relative;
  background-color: ${({ theme }) => theme.color.bg200};
  border-radius: 2rem;
  margin: 2rem;
  font-size: 1.5rem;
  height: 100%;
  display: flex;
  justify-content: normal;
  align-items: stretch;
  flex-direction: column;
  ${({ theme }) => theme.shadow};
`;

const InputForm = styled.div`
  position: relative;
  margin: 1.2rem 2rem;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ChatBox = styled.article`
  flex: 1 1 0;
  position: relative;
  background-color: ${({ theme }) => theme.color.bg300};
  height: 30vh;
  margin: 2rem;
  border-radius: 2rem;
  overflow: auto;
  display: flex;
  flex-direction: column;
  box-shadow: 4px 4px 3px ${({ theme }) => theme.color.bg100},
    -4px -4px 8px ${({ theme }) => theme.color.bg200};
  /* width: 50vw; */
`;

const InputComponent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  bottom: 0;
`;

const ChatInput = styled.input`
  width: 100%;
  flex: 1 1 0;
  height: 3rem;
  margin: 1rem;
  border-radius: 1rem;
  padding: 2rem;
  border: 0;
  justify-content: center;
  align-items: center;
  display: flex;
  ${({ theme }) => theme.shadow};

  &::placeholder {
    color: ${({ theme }) => theme.color.primary200};
    font-weight: 700;
    font-size: 1.5rem;
  }
  &:focus {
    outline: 0.4rem solid ${({ theme }) => theme.color.primary200};
  }
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
  font-size: 1.6rem;
  border-radius: 0.8rem;

  & span {
    position: relative;
    display: inline-block;
    /* float: right; */
    right: 0;
    top: 0;
    background-color: lightcoral;
    border-radius: 0.8rem;
    padding: 0.8rem;
  }
`;

const SendBtn = styled.div`
  position: absolute;
  top: 50%;
  right: 2.4rem;
  transform: translateY(-50%);
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border-radius: 50%;
  border: 0.4rem solid ${({ theme }) => theme.color.primary200};
  color: ${({ theme }) => theme.color.primary200};
  overflow: hidden;
  &:hover {
    border: 0.4rem solid ${({ theme }) => theme.color.primary100};
  }
  & svg {
    transition: 0.4s all ease-in-out;
    transform: scale(1.4);
    margin-left: -0.1rem;
    margin-top: 0.2rem;
  }
  & svg:hover {
    color: ${({ theme }) => theme.color.primary100};
  }
  &:hover svg {
    transform: translate(200%, -200%);
  }
`;
const LottieBox = styled.div`
  display: flex;
  justify-content: center;
  cursor: pointer;
  transform: scale(1.6);
  background-color: transparent;
  overflow: hidden;
  ${({ theme }) => theme.shadow};
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
const CR = ({ data, userId, roomId, roomData }) => {
  const [gpt, setGpt] = useState(""); // gpt 답변 담길곳
  const [user, setUserChat] = useState("");
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
  console.log("userId입니다.", userId);

  const [lang, setLang] = useState("en-US");

  const onEnd = () => {
    // 녹음이 끝난 후, 실행 할 함수를 추가할 수 있습니다.
    // console.log(gptAns);
    // speak({ text: gptAns });
    console.log("onEnd  : ", "녹음이 끝났습니다.");
    console.log("inputValue : ", inputValue);
    const newMessage1 = {
      id: Date.now(),
      text: inputValue,
    };
    setMessageList([...messageList, newMessage1]);
  };

  const onResult = (result) => {
    console.log("on Result (번역 결과) : ", result);
    setInputValue(result);
  };

  const changeLang = (event) => {
    console.log("changeLang : ", event.target.value);
    setLang(event.target.value);
  };

  const { speak, voices } = useSpeechSynthesis();
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
  const voice = voices[2];

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

  // useEffect(() => {
  //   fetch(`http://localhost:5000/room/make/${userid}`)
  //     .then((res) => res.json())
  //     .then((data) => setMessageList(data));
  // }, []);

  //**************** */ CR 채팅 보내기

  useEffect(() => {
    if (!inputValue) return;
    OnSubmitHandler();
  }, []);

  const OnSubmitHandler = () => {
    const userid = "32b16654-e983-47ef-a382-eb3bf1f9b789";
    const roomid = 1;
    axios
      .post(`/chat/${userid}/${roomid}`, {
        msg: inputValue,
      })
      .then((res) => {
        console.log("res (gpt): ", res.data);
        setGpt(res.data);
        const newMessage = {
          id: Date.now(),
          text: res.data,
        };
        console.log("gpt : ", res.data);
        setMessageList([...messageList, newMessage]);
        speak({
          text: res.data,
          voice,
        });
        console.log(messageList);
      })
      .catch((err) => {
        console.log(err);
      });
    setInputValue("");

    ///////////////////////////////
    ////////////////////////////////

    console.log("Sending message:", inputValue);
    // if (inputValue.trim()) {
    //   const newMessage = {
    //     id: Date.now(),
    //     text: inputValue,
    //   };
    //   // time;
    //   setMessageList([...messageList, newMessage]);

    //   setInputValue("");
    //   setMessage("");
    // }

    ////////////////////////////////
    ////////////////////////////////

    console.log("messageList : ", messageList);
  };

  return (
    <Wrapper>
      <RoomTitle roomData={roomData} />
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
      </ChatBox>
      <InputComponent>
        <InputForm>
          <ChatInput
            type="text"
            name="text"
            value={inputValue}
            onChange={handleInputChange}
            onKeyPress={handleKeyDown}
            placeholder="메시지를 입력하세요."></ChatInput>
          <SendBtn
            onClick={OnSubmitHandler}
            style={{
              width: "3rem",
              height: "3rem",
              backgroundColor: "#fff",
              boxShadow: " 0 -0.7rem 1rem rgba(0, 0, 0, 0.25);",
              // border: "1px solid black",
            }}>
            <IoIosSend />
          </SendBtn>
        </InputForm>

        <MicButton
          onMouseDown={() => {
            listen({ lang: lang, maxAlternatives: 10000 });
          }}
          onMouseUp={stop}>
          <LottieBox>
            <Lottie animationData={animationData} speed={0.5} />
          </LottieBox>
        </MicButton>
      </InputComponent>
    </Wrapper>
  );
};

export default CR;
