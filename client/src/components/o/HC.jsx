//HeaderComponent.jsx
import React from "react";
import styled from "styled-components";

const Container = styled.section`
  flex: 1 1 0;
  //min-width: 103.2rem;
  //max-width: 32rem;
  height: 5.6rem;
  /* height: 100%; */
  background-color: ${({ theme }) => theme.color.bg200};

  border-radius: 1.2rem;
  padding: 1.2rem;
  margin-left: 2rem;
  font-size: 3.2rem;
  align-self: flex-start;
  //flex: 0 1 0;
  //overflow-y: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
const HC = ({ children }) => {
  return <Container>{children}</Container>;
};

export default HC;
