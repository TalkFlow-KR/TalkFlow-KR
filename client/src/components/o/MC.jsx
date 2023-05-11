import React from "react";
import HC from "./HC";
import styled from "styled-components";
import CL from "./CL";
import CR from "./CR";
import LoginForm from "../organisms/Auth/LoginForm";

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  width: 107.2rem;
  height: 70rem;
  border-radius: 2rem;
  background-color: tomato;
`;
const ContentsBox = styled.article`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  height: 100%;
`;

const Mc = () => {
  return (
    <Wrapper>
      <HC>HC Contents Text</HC>
      <HC>HC Contents Title : CHAT / HOME / LOGIN / REGISTER </HC>
      <ContentsBox>
        <CL></CL>
        <CR></CR>
      </ContentsBox>
    </Wrapper>
  );
};

export default Mc;
