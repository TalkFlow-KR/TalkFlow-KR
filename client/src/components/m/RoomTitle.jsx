import React from "react";
import RoomIcon from "components/a/RoomIcon";
import styled from "styled-components";

const Wrapper = styled.article`
  background-color: orange;
  border-radius: 2rem;
  margin: 2rem;
  padding: 0.8rem;
  display: flex;
  align-items: center;
`;
const RoomTextBox = styled.div``;
const RoomTitle = () => {
  return (
    <Wrapper>
      <RoomIcon />
      <RoomTextBox>
        <h2>RoomTitle</h2>
        <h3>언어/테마/악센트</h3>
        <span>2099,09,99</span>
      </RoomTextBox>
    </Wrapper>
  );
};

export default RoomTitle;
