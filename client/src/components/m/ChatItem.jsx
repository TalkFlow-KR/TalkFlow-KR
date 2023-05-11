import React from "react";
import styled from "styled-components";
import ChatIcon from "../a/ChatIcon";

const Wrapper = styled.div`
  background-color: thistle;
  width: 31.6rem;
  height: 9rem;
  border-radius: 0.8rem;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin: 1.6rem;
`;
const TextBox = styled.div``;
const ChatItem = ({ title, lastMessage, date }) => {
  return (
    <Wrapper>
      <ChatIcon />
      <TextBox>
        <h2>{title}</h2>
        <p>{lastMessage}</p>
        <span>{date}</span>
      </TextBox>
    </Wrapper>
  );
};

export default ChatItem;
