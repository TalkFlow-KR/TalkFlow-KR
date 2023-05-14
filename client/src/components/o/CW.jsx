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

const CW = ({ userId, data, onSubmit, setSettings }) => {
  console.log("CW onSubmit", onSubmit);

  const TextBox = styled.div`
    width: 100%;
    text-align: center;
    font-size: 4.2rem;
  `;
  return (
    <Wrapper>
      <CS
        userId={userId}
        data={data}
        onSubmit={onSubmit}
        setSettings={setSettings}
      />
      <TextBox>
        <h1>대화하기전, 회화 테마를 선택 해주세요.</h1>
      </TextBox>
    </Wrapper>
  );
};

export default CW;
