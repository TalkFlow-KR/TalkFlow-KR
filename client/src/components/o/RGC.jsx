// RegisterComponent.jsx
import React, { useEffect, useState } from "react";
import HC from "./HC";
import styled from "styled-components";
import RegisterForm from "components/organisms/Auth/RegisterForm";
import SuccessRegister from "../organisms/Auth/SuccessRegister";

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
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: tan;
  position: relative;
`;
const RGC = () => {
  const [isFinish, setIsFinish] = useState(false);

  const registerProps = {
    isFinish,
    setIsFinish,
  };
  return (
    <Wrapper>
      <HC>회원 가입 </HC>
      <ContentsBox>
        {isFinish ? <SuccessRegister /> : <RegisterForm {...registerProps} />}
      </ContentsBox>
    </Wrapper>
  );
};

export default RGC;
