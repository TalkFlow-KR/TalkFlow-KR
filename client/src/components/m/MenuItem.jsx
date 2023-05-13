import React, { useState } from "react";
import styled from "styled-components";
import { Btn } from "styles/Button.styled";
import theme from "styles/themeProvider/theme";

const Wrapper = styled.button`
  width: 18.8rem;
  height: 4rem;
  /* height: 100%; */
  margin: 1rem;
  border-radius: 2rem;
  background-color: #fff;
  /* background-color: tomato; */
  /* background-color: ${({ theme }) => theme.color.bg300}; */

  &:hover {
    background-color: ${({ theme }) => theme.color.bg300};
    transition: all 0.2s ease-in-out;
    transform: scale(1.1);
  }
  @media (max-width: 900px) {
    width: ${({ theme }) => theme.layout.width.tabletLc};
  }
`;

const MenuItem = ({ children }) => {
  return (
    <>
      <Wrapper>{children}</Wrapper>
    </>
  );
};

export default MenuItem;
