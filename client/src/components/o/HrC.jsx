//HrC
// New Chat center flex 요소 Wrapper
import React from "react";
import styled from "styled-components";
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

const data = {
  ai: {
    answer: ["partners test", "1", "2", "3"],
  },
};

const HrC = ({ userId, roomData, data }) => {
  return (
    <Wrapper>
      <HW userId={userId} roomData={roomData} data={data} />
    </Wrapper>
  );
};

export default HrC;
