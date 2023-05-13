// MainContentsComponent.jsx
import React from "react";
import HC from "./HC";
import styled from "styled-components";
import CL from "./CL";
import MW from "./MW";

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
`;

const ContentsBox = styled.section`
  width: 100%;
  height: 100%;
  padding-bottom: 11.2rem;
`;

const MC = () => {
  return (
    <Wrapper>
      <ContentsBox>
        <HC>HOME</HC>
        <MW></MW>
        {/* <CL></CL> */}
      </ContentsBox>
    </Wrapper>
  );
};

export default MC;

