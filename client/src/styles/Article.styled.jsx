import styled from "styled-components";

// atoms 컴포넌트에 가변적 옵션은 molecules 스타일에서 만질것 !!
export const Box = styled.article`
  //width: ${(props) => props.theme.layout.width.left};
  //height: ${(props) => props.theme.layout.height.top};
  // border-radius: ${(props) => props.theme.layout.radius.s};
  //
  background: ${(props) => props.theme.color.boxBackground};
  color: ${(props) => props.theme.color.boxTextColor};
  //displayFlex
  ${({ theme }) => theme.layout.flexCenter};
  //TODO : margin 고민
`;
