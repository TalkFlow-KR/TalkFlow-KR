import React from "react";
import styled from "styled-components";
import ChatIcon from "../a/ChatIcon";

const Wrapper = styled.div`
  background-color: thistle;
  width: 33.6rem;
  height: 9rem;
  border-radius: 0.8rem;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
`;
const ChatItem = ({ children }) => {
  return (
    <Wrapper>
      <ChatIcon />
      <br />
      <h2>Title</h2>
      <p>LastMessage</p>
    </Wrapper>
  );
};

export default ChatItem;
