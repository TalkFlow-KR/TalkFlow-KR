import React, { useState } from "react";
import styled from "styled-components";
import { Btn } from "styles/Button.styled";
import theme from "styles/themeProvider/theme";

const Wrapper = styled.span`
  color: ${({ theme }) => theme.color.highlight};

  @media (max-width: 900px) {
    width: ${({ theme }) => theme.layout.width.tabletLc};
    display: none;
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
