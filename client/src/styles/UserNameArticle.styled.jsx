import styled from "styled-components";
import { Box } from "./Article.styled";

export const Wrapper = styled(Box)`
  //width: 22.2rem;
  //height: 10rem;
  //padding: 0 1.2rem;
  //border-radius: 0.8rem;
  width: ${(props) => props.theme.layout.width.left};
  height: ${(props) => props.theme.layout.height.top};
  border-radius: ${(props) => props.theme.layout.radius.s};
  margin-left: 2.8rem;

  //background-color: transparent;
`;
