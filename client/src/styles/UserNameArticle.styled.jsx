import styled from "styled-components";
import Article from "../components/atoms/Article";

export const Wrapper = styled(Article)`
  //width: 22.2rem;
  //height: 10rem;
  //padding: 0 1.2rem;
  //border-radius: 0.8rem;
  width: ${(props) => props.theme.layout.width.left};
  height: ${(props) => props.theme.layout.height.top};
  border-radius: ${(props) => props.theme.layout.radius.s};
`;
