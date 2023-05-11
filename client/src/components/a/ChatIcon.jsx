import React from "react";
import styled from "styled-components";

const imageURL = "https://picsum.photos/seed/picsum/200/300";
const Wrapper = styled.div`
  width: 6rem;
  height: 6rem;
  margin: 0.8rem;

  & img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }
`;
const ChatIcon = () => {
  return (
    <>
      <Wrapper>
        <img src={imageURL}></img>
      </Wrapper>
    </>
  );
};

export default ChatIcon;
