import React from "react";
import styled from "styled-components";
import theme from "../../styles/themeProvider/theme";

const Wrapper = styled.article`
  width: ${({ theme }) => theme.layout.width.mainArticle};
  height: ${({ theme }) => theme.layout.height.mainArticle};
  border-radius: ${({ theme }) => theme.layout.radius.l};
  color: ${({ theme }) => theme.color.textColor};
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
  margin: 4rem;
`;

const MainArticle = ({ children, bgColor }) => {
  return <Wrapper style={{ backgroundColor: bgColor }}>{children}</Wrapper>;
};

export default MainArticle;
