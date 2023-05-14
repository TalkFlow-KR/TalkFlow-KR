import { createGlobalStyle } from "styled-components";
import PretendardBlack from "fonts/Pretendard-Black.woff2";
import PretendardBold from "fonts/Pretendard-Bold.woff2";
import PretendardMedium from "fonts/Pretendard-Medium.woff2";
import PretendardRegular from "fonts/Pretendard-Regular.woff2";
import PretendardLight from "fonts/Pretendard-Light.woff2";

export const GlobalStyle = createGlobalStyle`;
@font-face {
  font-family:'PretendardBlack';
  src:local('Pretendard Black'),url(${PretendardBlack}) format('woff2');
  font-weight: 900;
  font-style: normal;
}
@font-face {
  font-family:'PretendardBold';
  src:local('Pretendard Bold'),url(${PretendardBold}) format('woff2');
  font-weight: 700;
  font-style: normal;
}
@font-face {
  font-family:'PretendardMedium';
  src:local('Pretendard Medium'),url(${PretendardMedium}) format('woff2');
  font-weight: 500;
  font-style: normal;
}
@font-face {
  font-family:'PretendardRegular';
  src:local('Pretendard Regular'),url(${PretendardRegular}) format('woff2');
  font-weight: 400;
  font-style: normal;
}
@font-face {
  font-family:'PretendardLight';
  src:local('Pretendard Light'),url(${PretendardLight}) format('woff2');
  font-weight: 300;
  font-style: normal;
}
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
    font-family: 'PretendardRegular', sans-serif;
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
