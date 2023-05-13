import { createGlobalStyle } from "styled-components";
export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  *::before,
  *::after {
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }
  body {
    //background
    background-color: ${({ theme }) => theme.color.bg300};
    // layout 
    line-height: ${(props) => props.theme.lineHeight};
    letter-spacing: ${(props) => props.theme.layout.spacing};
    height: 100vh;
    //width: 100vh;
    //letter-spacing: -2.5rem;
    padding: 2.4rem;
      overflow: hidden;
      display: flex;
      justify-content: center;
      align-items: center;
    font-size: 1.5rem;
      
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
