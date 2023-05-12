//History.jsx
import React from "react";
import styled from "styled-components";
import LC from "../components/o/LC";
import MC from "components/o/MC";

const Container = styled.main`
  flex: 1 1 0;
  height: 80vh;
  border-radius: 2rem;
  color: ${({ theme }) => theme.color.text100};
  background-color: ${({ theme }) => theme.color.bg200};
  margin: 2rem;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  gap: 6rem;
  align-items: stretch;

  & > div {
    display: flex;
    flex-direction: column;
  }
`;
const Main = () => {
  return (
    <>
      <Container>
        <LC></LC>
        <MC></MC>
      </Container>
    </>
  );
};

export default Main;
