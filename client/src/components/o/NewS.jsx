// NewChatComponent.jsx
import React from "react";
import HC from "./HC";
import styled from "styled-components";
import CW from "./CW";

const Wrapper = styled.section`
  flex: 1 1 0;
  display: flex;
  flex-direction: column;
  border-radius: 2rem;
  background-color: ${({ theme }) => theme.color.bg100};
  align-items: center;
  gap: 2rem;
  overflow: hidden;
`;
const ContentsBox = styled.section`
  width: 100%;
  height: 100%;
  padding-bottom: 11.2rem;
`;

const NewS = ({ userId, data, onSubmit, setSettings }) => {
  console.log("NewC onSubmit", onSubmit);
  return (
    <Wrapper>
      <ContentsBox>
        <HC>New Chat</HC>
        <CW
          userId={userId}
          data={data}
          onSubmit={onSubmit}
          setSettings={setSettings}
        />
      </ContentsBox>
    </Wrapper>
  );
};

export default NewS;
