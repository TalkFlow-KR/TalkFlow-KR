//HrC
// New Chat center flex 요소 Wrapper
import React, { useState } from "react";
import styled from "styled-components";
import HC from "./HC";
import HW from "./HW";

const Wrapper = styled.section`
height: 100%;
flex: 1 1 0;
display: flex;
flex-direction: column;
border-radius: 2rem;
background-color: ${({ theme }) => theme.color.bg100};
align-items: center;
gap: 2rem;
overflow: hidden;
  // width: 100%;
  // display: flex;
  // align-items: center;

  @media (max-width: 720px) {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
  }
`;

const ContentsBox = styled.section`
  width: 100%;
  height: 100%;
  padding-bottom: 11.2rem;
`;

const data = {
  ai: {
    answer: ["partners test", "1", "2", "3"],
  },
};

const CW = () => {
  const [isOpen, setIsOpen] = useState([false, false, false]);
  const [option0, setOption0] = useState("");
  const [option1, setOption1] = useState("");
  const [option2, setOption2] = useState("");
  const onClick = (number, option) => {
    const newIsOpen = isOpen.map((v, i) => (i === number ? !v : false));
    setIsOpen(newIsOpen);
  };

  return (
    <Wrapper>
      <ContentsBox>
        <HC>HISTORY</HC>
        <HW></HW>
      </ContentsBox>
    </Wrapper>
  );
};

export default CW;
