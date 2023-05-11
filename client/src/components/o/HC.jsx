//HeaderComponent.jsx
import React from "react";
import styled from "styled-components";

const Container = styled.section`
  width: 103.2rem;
  height: 5.2rem;
  background-color: tan;
  border-radius: 2rem;
  margin: 0.8rem;
`;
const Hc = ({ children }) => {
  return <Container>{children}</Container>;
};

export default Hc;
