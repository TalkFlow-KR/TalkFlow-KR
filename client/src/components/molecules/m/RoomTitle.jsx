import React from "react";
import RoomIcon from "components/a/RoomIcon";
import styled from "styled-components";
import theme from "styles/themeProvider/theme";

const Wrapper = styled.article`
  background-color: ${({ theme }) => theme.color.primary100};
  border-radius: 2rem;
  margin: 2rem;
  padding: 0.8rem 2.4rem;
  align-items: center;
  text-align: left;
`;
const RoomTextBox = styled.div``;
const RoomTitle = ({ roomData }) => {
  console.log("roomTitle roomData", roomData);

  return (
    <Wrapper>
      <RoomTextBox>
        <h2>RoomTitle</h2>
        <h3>언어/테마/악센트</h3>
        <span>2099,09,99</span>
      </RoomTextBox>
    </Wrapper>
  );
};

export default RoomTitle;
