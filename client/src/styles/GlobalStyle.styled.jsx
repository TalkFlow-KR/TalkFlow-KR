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
    //background
    background-color: ${(props) => props.theme.color.background};
    // layout 
    line-height: ${(props) => props.theme.lineHeight};
    font-size: ${(props) => props.theme.fontSizes.body};
    letter-spacing: ${(props) => props.theme.layout.spacing};
    height: 100vh;
    width: 100vw;
     //letter-spacing: -2.5rem;

  li {
    list-style: none;
  }

  a {
    text-decoration: none;
  }

  button {
    cursor: pointer;
    border: 0;
    
    
  }
  p {
  }
  }
`;
