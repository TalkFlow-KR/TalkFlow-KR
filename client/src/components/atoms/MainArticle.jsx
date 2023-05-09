import React from "react";
import styled from "styled-components";
import theme from "../../styles/themeProvider/theme";

const Wrapper = styled.article`
  width: ${(props) => theme.layout.width.mainArticle};
  height: ${(props) => theme.layout.height.mainArticle};
  //background-color: ${(props) => theme.color.boxBackground};
  //background-color: #dae2f9;
  border-radius: ${(props) => theme.layout.radius.l};
  color: white;
  margin: ${(props) => theme.layout.margin.l};
`;

const MainArticle = ({ children, bgColor }) => {
  return <Wrapper style={{ backgroundColor: bgColor }}>{children}</Wrapper>;
};

export default MainArticle;
