import Token from "assets/design-tokens.json";

// 반응형 디자인을 위한 픽셀 REM 컨버팅
// design token 은 컨버팅 해야함
const px2Rem = (px) => `${px / 16}rem`;

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
    top: "114.2rem",
    main: "92.4rem",
  },
  height: {
    top: "10rem",
  },
  flexCenter: `
  display:flex;
  justify-content:center;
  align-items:center;
  `,
};
const color = {
  boxBackground: Token.style.color.charcoal["charcoal-900"].value,
  boxTextColor: Token.style.color.charcoal["charcoal-100"].value,
  selectedColor: Token.style.color.charcoal["charcoal-200"].value,
  highlightColor: Token.style.color.lightblue["lb-400"].value,
  blueColor: Token.style.color.primary["indigo-600"].value,
  chatBoxBackground: Token.style.color.charcoal["charcoal-700"].value,
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
};
const lineHeight = 1.5;

const theme = {
  layout,
  px2Rem,
  color,
  fontSizes,
  lineHeight,
};

export default theme;
