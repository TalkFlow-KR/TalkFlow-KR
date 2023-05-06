import { Box } from "./Article.styled";
import styled from "styled-components";

export const Wrapper = styled(Box)`
  width: ${(props) => props.theme.layout.width.main};
  height: ${(props) => props.theme.layout.height.recent};
  border-radius: ${(props) => props.theme.layout.radius.l};
  display: flex;
  justify-content: space-between;
  padding: 0 2.4rem;
`;
