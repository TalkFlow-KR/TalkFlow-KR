import Token from "assets/design-tokens.json";
import { keyframes, css } from "styled-components";
// 반응형 디자인을 위한 픽셀 REM 컨버팅
// design token 은 컨버팅 해야함
const px2Rem = (px) => `${px / 16}rem`;
const pulse = keyframes`
  0% {
    transform: scale(0.9);
    opacity: 1;
  }

  50% {
    transform: scale(1);
    opacity: 0.5;
  }

  100% {
    transform: scale(0.9);
    opacity: 1;
  }
`;
const shimmer = keyframes`
        0% {
          background-position: -400px 0;
        }
        50% {
          background-position: 400px 0;
        }
  100%{
    background-position: -400px 0;
    
  }
`;

const layout = {
  // rem
  spacing: "-0.045rem",
  radius: {
    xs: ".4rem",
    s: ".8rem",
    m: "1.2rem",
    l: "1.6rem",
    xl: "3.2rem",
  },
  margin: {
    xxs: "4",
    xs: "8",
    s: "1.2",
    m: "1.6",
    l: "2.0",
    xl: "2.4",
    xxl: "3.2",
  },
  width: {
    left: "22.2rem",
    lc: "26.4rem",
    tabletLc: "10rem",
    top: "114.2rem",
    main: "92.4rem",
    mobileTop: "36rem",
    mainArticle: "69rem",
  },
  height: {
    top: "10rem",
    recent: "7.5rem",
    nav: "34.4rem",
    mainArticle: "57.3rem",
  },
  flexCenter: `
  display:flex;
  justify-content:center;
  align-items:center;
  `,
};
const color = {
  background: `
    background: linear-gradient(120deg, #121316 -5%, #36383E 90%) center/cover no-repeat;
  `,
  boxBackground: Token.style.color.charcoal["charcoal-900"].value,
  boxTextColor: Token.style.color.charcoal["charcoal-100"].value,
  textColor: Token.style.color.charcoal["charcoal-100"].value,
  selectedColor: Token.style.color.charcoal["charcoal-200"].value,
  highlightColor: Token.style.color.lightblue["lb-400"].value,
  blueColor: Token.style.color.primary["indigo-600"].value,
  chatBoxBackground: Token.style.color.charcoal["charcoal-700"].value,
  chatBackground: Token.style.color.charcoal["charcoal-800"].value,
  animationBackgroundColor: "#dae2f9",
  inputShadow: "box-shadow: 0 5px 20px -5px rgba(0,0,0,.07);",
  a: "#F2F8FC",
  b: "#3d3e3f",
  c: "#fff",
  d: "#6A7FD3",
  e: "#95DB9B",
};
const fontSizes = {
  // layout
  boxTitle: px2Rem(Token.style.typography["font-700-18"].size.value),
  boxNormal: px2Rem(Token.style.typography["font-500-18"].size.value),
  body: px2Rem(Token.style.typography["font-500-18"].size.value),
  // header

  // main
  mainTitle: px2Rem(Token.style.typography["font-900-72"].size.value),
  mainSubtitle: px2Rem(Token.style.typography["font-500-36"].size.value),
  mainDesc: px2Rem(Token.style.typography["font-500-24"].size.value),
  mainBtn: px2Rem(Token.style.typography["font-900-24"].size.value),

  // nav
  navMenu: px2Rem(Token.style.typography["font-500-24"].size.value),
};
const lineHeight = 1.5;

const darkTheme = {
  layout,
  fontSizes,
  lineHeight,
  color: {
    primary300: "#0085ff",
    primary200: "#69b4ff",
    primary100: "#e0ffff",
    accent100: "#006fff",
    accent200: "#e1ffff",
    text100: "#FFFFFF",
    text200: "#9e9e9e",
    bg100: "#1E1E1E",
    bg200: "#2d2d2d",
    bg300: "#454545",
  },
};
const lightTheme = {
  layout,
  fontSizes,
  lineHeight,
  color: {
    primary100: "#FFD700",
    primary200: "#ddb900",
    primary300: "#917800",
    accent100: "#C0C0C0",
    accent200: "#626262",
    text200: "#333333",
    text100: "#5c5c5c",
    bg100: "#F7f7f7",
    bg200: "#ededed",
    bg300: "#c4c4c4",
  },
  gradient: {
    gradient100:
      "background: linear-gradient(90deg, hsla(190, 79%, 59%, 1) 0%, hsla(190, 88%, 66%, 1) 100%);",
  },
  animation: {
    shimmer: {
      keyframes: css`
        ${shimmer}
      `,
      duration: "8s",
      timingFunction: "ease-in-out",
      iterationCount: "infinite",
    },
  },
  background: "linear-gradient(120deg, #eee 10%, #e0e0e0 50%, #eee 90%)",
  skeletonBackground: "background-color : #282828",
};
const theme = {
  lightTheme,
  darkTheme,
};
export default theme;
// theme  를 dark / light 로 나누어 다크모드
