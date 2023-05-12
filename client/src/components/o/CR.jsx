//ChatRoomComponent.jsx
import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import RoomTitle from "../m/RoomTitle";

const Wrapper = styled.section`
  flex: 1 1 0;
  height: 50vh;
  //width: 44.4rem;
  //height: 56.2rem;
  //margin: 1.4rem;
  background-color: #ddd;
  border-radius: 2rem;
  //padding: 1.6rem;
  margin: 2rem;
  //overflow-y: hidden;
  overflow: auto;
`;

const ChatBox = styled.article`
  position: relative;
  ////height: 1rem;
  ////height: 40rem;
  background-color: ${({ theme }) => theme.color.bg300};
  margin: 2rem;
  border-radius: 2rem;
  //overflow: hidden;
`;

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
    right: 0;
    top: 0;
    background-color: lightcoral;
    border-radius: 0.8rem;
    padding: 0.8rem;
  }
`;

const CR = ({ data }) => {
  const [text, setText] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [messageList, setMessageList] = useState([
    {
      id: 1,
      text: "test",
    },
    {},
    {},
  ]);
  const [message, setMessage] = useState("");
  const messagesEndRef = useRef(null);

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
          time: new Date().toLocaleTimeString(),
        };
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
    // if(inputValue.trim() !== ''){
    if (inputValue.trim()) {
      const newMessage = {
        id: Date.now(),
        text: inputValue,
        // isAiBubble: false,
        time: new Date().toLocaleTimeString(),
      };
      setMessageList([...messageList, newMessage]);
      setInputValue("");
      setMessage("");
      // setIsAiBubble(true);
    }
  };

  return (
    <Wrapper>
      <RoomTitle />
      <ChatBox>
        {messageList.map((message) => (
          <AI key={message.id}>
            <span>{message.text}</span>
          </AI>
        ))}
        <div ref={messagesEndRef} />
      </ChatBox>
    </Wrapper>
  );
};

export default CR;
