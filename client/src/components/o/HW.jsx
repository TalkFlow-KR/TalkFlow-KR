// History center flex 요소 Wrapper
import React, { useState } from "react";
import styled from "styled-components";
import CL from "./CL";
import CR from "./CR";

const Wrapper = styled.section`
  width: 100%;
  height: 100%;
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


const HW = ({ userId }) => {

  return (
    <Wrapper>
      <CL></CL>
      <CR userId={userId} data={data} />
    </Wrapper>
  );
};

export default HW;
