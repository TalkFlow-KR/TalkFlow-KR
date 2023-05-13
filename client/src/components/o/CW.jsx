//CW
// New Chat center flex 요소 Wrapper
import React, { useState } from "react";
import styled from "styled-components";
import CR from "./CR";
import CS from "./CS";

const Wrapper = styled.section`
  width: 100%;
  display: flex;
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
      <CS />
      <CR data={data} />
    </Wrapper>
  );
};

export default CW;


