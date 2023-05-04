import MainPage from "pages/MainPage";
import styled from "styled-components";

export const BODY = styled.div`
  background-color: #fff;
  width: 100vw;
  height: 100vh;
`;

export const CONTAINER = styled.div`
  background-color: #eeeeee;
  width: 90vw;
  height: 80vh;
  border-radius: 2rem;
  align-items: center;
  position: relative;
  top: 5vh;
  left: 5vw;
`;

export const MAIN = styled.div`
  /* margin: 3rem; */
  background-color: tomato;
  align-items: center;
  width: 80vw;
`;

export const HEADER = styled.div`
  margin: 3rem;
  background-color: #0cf22a;
`;
export const TEST = styled(MAIN)`
  background-color: tan;
`;

export const CARD = styled.div`
  background-color: #e4e4e4;
  width: 40vw;
  height: 90vh;
`;
