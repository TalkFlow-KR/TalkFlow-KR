import { keyframes, css } from "styled-components";
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
const fontSizes = {
  boxTitle: 1.8,
  boxNormal: 1.8,
  body: 1.8,
  main: 7.2,
  mainSubtitle: 3.6,
  mainDesc: 2.4,
  mainBtn: 2.4,
  navMenu: 2.4,
};
const lineHeight = 1.5;
const layout = {
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

const common = {
  shadow: "box-shadow: 0 5px 20px -5px rgba(0,0,0,.07)",
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
const darkTheme = {
  ...common,
  layout,
  fontSizes,
  lineHeight,
  color: {
    primary100: "#0085ff",
    primary200: "#69b4ff",
    primary300: "#e0ffff",
    accent200: "#006fff",
    accent100: "#e1ffff",
    text200: "#FFFFFF",
    text100: "#9e9e9e",
    bg100: "#1E1E1E",
    bg200: "#2d2d2d",
    bg300: "#454545",
  },
};
const lightTheme = {
  ...common,
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
};
const theme = {
  lightTheme,
  darkTheme,
};
export default theme;
// theme  를 dark / light 로 나누어 다크모드
