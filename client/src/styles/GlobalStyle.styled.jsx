import { createGlobalStyle } from "styled-components";
import Token from '../assets/design-tokens.json'


const pxtorem = (px) =>{
return `${px/16}rem`
}
export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-size: 62.5%;
  }

  body {
    line-height: 1.5;
  }

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
    font-size: ${pxtorem(Token.style.typography["font-500-16"].size.value)}
  }
`;
