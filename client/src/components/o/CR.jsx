//ChatRoomComponent.jsx
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import RoomTitle from "../m/RoomTitle";

const Wrapper = styled.section`
  flex: 1 1 0;
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
  background-color: tomato;
  margin: 2rem;
  border-radius: 2rem;
  //overflow: hidden;
`;

const AI = styled.p`
  display: inline-block;
  width: 100%;
  padding: 0.8rem;
  //background-color: tan;
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

const Cr = ({ data }) => {
  const [text, setText] = useState([]);

  useEffect(() => {
    setText([...text, data.ai.answer]);
  }, []);

  return (
    <Wrapper>
      <RoomTitle />
      <ChatBox>
        <AI>
          <span>AI CHAT TEXT SAMPLE</span>
        </AI>
        <User>
          <span>User CHAT TEXT SAMPLE</span>
        </User>
        <AI>
          <span>AI CHAT TEXT SAMPLE</span>
        </AI>
        <User>
          <span>User CHAT TEXT SAMPLE</span>
        </User>
        <AI>
          <span>AI CHAT TEXT SAMPLE</span>
        </AI>
        <User>
          <span>User CHAT TEXT SAMPLE</span>
        </User>
        <AI>
          <span>AI CHAT TEXT SAMPLE</span>
        </AI>
        <User>
          <span>User CHAT TEXT SAMPLE</span>
        </User>{" "}
        <AI>
          <span>AI CHAT TEXT SAMPLE</span>
        </AI>
        <User>
          <span>User CHAT TEXT SAMPLE</span>
        </User>
        <AI>
          <span>AI CHAT TEXT SAMPLE</span>
        </AI>
        <User>
          <span>User CHAT TEXT SAMPLE</span>
        </User>
        <AI>
          <span>AI CHAT TEXT SAMPLE</span>
        </AI>
        <User>
          <span>User CHAT TEXT SAMPLE</span>
        </User>
        <AI>
          <span>AI CHAT TEXT SAMPLE</span>
        </AI>
        <User>
          <span>User CHAT TEXT SAMPLE</span>
        </User>{" "}
        <User>
          <span>User CHAT TEXT SAMPLE</span>
        </User>{" "}
        <User>
          <span>User CHAT TEXT SAMPLE</span>
        </User>{" "}
        <User>
          <span>User CHAT TEXT SAMPLE</span>
        </User>{" "}
        <User>
          <span>User CHAT TEXT SAMPLE</span>
        </User>{" "}
        <User>
          <span>User CHAT TEXT SAMPLE</span>
        </User>{" "}
        <User>
          <span>User CHAT TEXT SAMPLE</span>
        </User>{" "}
        <User>
          <span>User CHAT TEXT SAMPLE</span>
        </User>{" "}
        <User>
          <span>User CHAT TEXT SAMPLE</span>
        </User>{" "}
        <User>
          <span>User CHAT TEXT SAMPLE</span>
        </User>{" "}
        <User>
          <span>User CHAT TEXT SAMPLE</span>
        </User>{" "}
        <User>
          <span>User CHA111T TEXT SAMPLE</span>
        </User>
      </ChatBox>
    </Wrapper>
  );
};

export default Cr;
