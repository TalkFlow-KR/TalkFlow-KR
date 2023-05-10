import styled from "styled-components";
import { Box } from "./Article.styled";

export const Wrapper = styled(Box)`
  width: ${(props) => props.theme.layout.width.left};
  height: ${(props) => props.theme.layout.height.top};
  border-radius: ${(props) => props.theme.layout.radius.s};
  margin-left: 2.8rem;

  //background-color: transparent;
`;
