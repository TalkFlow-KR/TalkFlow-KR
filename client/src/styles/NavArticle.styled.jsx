import styled from "styled-components";
import { Box } from "./Article.styled";

export const Wrapper = styled(Box)`
  width: ${(props) => props.theme.layout.width.left};
  height: ${(props) => props.theme.layout.height.nav};
  border-radius: ${(props) => props.theme.layout.radius.s};
  margin-left: 2.8rem;
  flex-direction: column;
  display: flex;
  justify-content: flex-start;

  & button {
    width: 20.6rem;
    height: 3.4rem;
    border-radius: ${(props) => props.theme.layout.radius.s};
    margin-top: 0.8rem;
    background-color: ${(props) => props.theme.color.selectedColor};
    font-size: ${(props) => props.theme.fontSizes.navMenu};
    color: ${(props) => props.theme.color.boxBackground};
    text-align: left;
    padding-left: 1.6rem;
  }
`;
