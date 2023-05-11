import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 18.8rem;
  height: 4rem;
  margin: 2rem;
  background-color: #fff;
  border-radius: 0.8rem;
`;

const MenuItem = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

export default MenuItem;
