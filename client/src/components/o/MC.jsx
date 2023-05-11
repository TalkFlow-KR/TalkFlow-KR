import React from "react";
import HC from "./HC";
import styled from "styled-components";
import CL from "./CL";
import CR from "./CR";

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  //width: 107.2rem;
  height: 70rem;
  border-radius: 2rem;
  background-color: tomato;
  flex: 1 1 0;
  gap: 2rem;
`;
const ContentsBox = styled.article`
  flex: 1 1 0;
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  height: 100%;
`;

const data = {
  ai: {
    answer: ["partners test", "1", "2", "3"],
  },
};
const Mc = () => {
  return (
    <Wrapper>
      <HC>HC Contents Text</HC>
      <HC>HC Contents Title : CHAT / HOME / LOGIN / REGISTER </HC>
      <ContentsBox>
        <CL></CL>
        <CR data={data}></CR>
      </ContentsBox>
    </Wrapper>
  );
};

export default Mc;
