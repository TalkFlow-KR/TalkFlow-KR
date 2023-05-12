import BarIcon from "components/atoms/BarIcon";
import Button from "components/atoms/Button";
import LogoIcon from "components/atoms/LogoIcon";
import ChatComponent from "components/molecules/ChatComponent";
import Lottie from "lottie-react";
import animationData from "assets/micIdle.json";

import React, { useState, useRef, useEffect } from "react";
import {
  ChatBubble,
  UserChatBubble,
  AiChatBubble,
  Time,
  ChatContainer,
  Header,
  Body,
  MessageList,
  ChatCover,
  Footer,
  InputContainer,
  Input,
  SendButton,
} from "../../styles/Chat.styled";

const ChatRoom = () => {
  const [inputValue, setInputValue] = useState("");
  const [messageList, setMessageList] = useState([]);
  const [message, setMessage] = useState("");
  const messagesEndRef = useRef(null);

  // scrollIntoView : 가장 최근 메세지에 포커스
  useEffect(() => {
    messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
  }, [messageList]);

  // 엔터로 입력하기
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      // Send the message
      console.log("Sending message:", inputValue);
      if (inputValue.trim()) {
        const newMessage = {
          id: Date.now(),
          text: inputValue,
          time: new Date().toLocaleTimeString(),
        };
        setMessageList([...messageList, newMessage]);
        setInputValue("");
        setMessage("");
        // setIsAiBubble(true);
        // setMessage(event.target.value);
      }
    }
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    setMessage(e.target.value);
  };

  const handleSendClick = () => {
    // if(inputValue.trim() !== ''){
    if (inputValue.trim()) {
      const newMessage = {
        id: Date.now(),
        text: inputValue,
        time: new Date().toLocaleTimeString(),
      };
      setMessageList([...messageList, newMessage]);
      setInputValue("");
      setMessage("");
      // setIsAiBubble(true);
    }
  };

  return (
    <ChatContainer>
      <ChatCover>
        <ChatComponent />
      </ChatCover>
      <Body>
        {messageList.map((message) => (
          <ChatBubble key={message.id}>{message.text}</ChatBubble>
        ))}
        {/* <Time key={message.id}>{message.time}</Time> */}
        <div ref={messagesEndRef} />
      </Body>
      <Footer>
        <InputContainer>
          <Input
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            onKeyPress={handleKeyDown}
            placeholder="메시지를 입력하세요."
          />
        </InputContainer>
        <SendButton onClick={handleSendClick}>
          <Lottie animationData={animationData} />
        </SendButton>
      </Footer>
    </ChatContainer>
  );
};
export default ChatRoom;
