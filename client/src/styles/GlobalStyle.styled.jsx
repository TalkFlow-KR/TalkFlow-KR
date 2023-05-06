import { createGlobalStyle } from "styled-components";
export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html {
    font-size: 62.5%;
  }

  body {
    line-height: ${(props) => props.theme.lineHeight};
     font-size: ${(props) => props.theme.fontSizes.mainTitle};
     letter-spacing: ${(props) => props.theme.layout.spacing};
     //letter-spacing: -2.5rem;

  li {
    list-style: none;
  }

  a {
    text-decoration: none;
  }

  button {
    cursor: pointer;
  }
  p {
  }
  }
`;
