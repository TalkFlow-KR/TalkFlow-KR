import React from "react";
import styled from "styled-components";
import LC from "../components/o/LC";
import HC from "../components/o/HC";
import MC from "../components/o/MC";

const Container = styled.main`
  flex: 1 1 0;
  width: 140rem;
  max-width: 144rem;
  min-width: 36rem;
  //width: 100%;
  //height: 100%;
  height: 70rem;
  border-radius: 2rem;
  color: ${({ theme }) => theme.color.a};
  background-color: red;
  margin: 2rem;
  display: flex;
  flex-direction: column;
  align-content: space-around;
  flex-wrap: wrap;
`;
const Main = () => {
  return (
    <Container>
      <LC></LC>
      <MC></MC>
    </Container>
  );
};

export default Main;
