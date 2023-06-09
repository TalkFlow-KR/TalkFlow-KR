// NotificationComponent.jsx
import React from "react";
import HC from "./HC";
import styled from "styled-components";
import CL from "./CL";
import CR from "./CR";
import CS from "./CS";

const Wrapper = styled.section`
  flex: 1 1 0;
  display: flex;
  flex-direction: column;
  //width: 107.2rem;
  //height: 70rem;
  //height: 100%;
  border-radius: 2rem;
  //background-color: tomato;
  background-color: ${({ theme }) => theme.color.bg100};
  //justify-content: center;
  align-items: center;
  gap: 2rem;
  //margin: 2rem;
  overflow: hidden;
`;
const ContentsBox = styled.section`
  /* //width: 100%; */
  height: 100%;
  display: flex;
  padding-bottom: 11.2rem;
`;
const NC = () => {
  return (
    <Wrapper>
      <HC>NOTIFICATION</HC>
      <ContentsBox></ContentsBox>
    </Wrapper>
  );
};

export default NC;
