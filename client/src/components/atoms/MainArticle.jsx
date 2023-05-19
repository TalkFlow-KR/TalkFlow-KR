import React from "react";
import styled from "styled-components";
import theme from "../../styles/themeProvider/theme";

const Wrapper = styled.article`
  /* width: ${({ theme }) => theme.layout.width.mainArticle}; */
  width: 100%;
  //height: ${({ theme }) => theme.layout.height.mainArticle};
  border-radius: ${({ theme }) => theme.layout.radius.l};
  height: 100%;
  color: ${({ theme }) => theme.color.textColor};
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 2rem;
  ${({ theme }) => theme.shadow};

  & h1 {
    margin-left: 2rem;
    text-align: left;
    color: ${({ theme }) => theme.color.highlight};
  }
  & h2 {
    font-size: 2.4rem;
    font-weight: 900;
  }
`;

const MainArticle = ({ children, bgColor }) => {
  return <Wrapper style={{ backgroundColor: bgColor }}>{children}</Wrapper>;
};

export default MainArticle;
