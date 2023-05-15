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
        <h2> English at the Gym with Friend </h2>
        <h3> English / at the Gym / Friend </h3>
        <span>2023.05.15</span>
      </RoomTextBox>
    </Wrapper>
  );
};

export default RoomTitle;
