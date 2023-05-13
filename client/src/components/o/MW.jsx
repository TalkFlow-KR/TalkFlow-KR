// Home(MC) center flex 요소 Wrapper
import React, { useState } from "react";
import styled from "styled-components";
import CS from "./CS";
import Intro from "./Intro";

const Wrapper = styled.section`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;

  @media (max-width: 720px) {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
  }
`;

const data = {
  ai: {
    answer: ["partners test", "1", "2", "3"],
  },
};

const MW = () => {
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
      <CS></CS>
      <Intro></Intro>
    </Wrapper>
  );
};

export default MW;
