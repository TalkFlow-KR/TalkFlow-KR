//History.jsx
import React from "react";
import styled from "styled-components";
import LC from "../components/o/LC";
import IC from "components/o/IC";
import HrC from "components/o/HrC";

const Container = styled.main`
  flex: 1 1 0;
  //width: 140rem;
  //max-width: 144rem;
  //min-width: 36rem;
  //width: 100%;
  //height: 100%;
  //height: 70rem;
  //width: 80vw;
  height: 80vh;
  //height: 100%;
  //width: 100%;
  border-radius: 2rem;
  color: ${({ theme }) => theme.color.text100};
  background-color: ${({ theme }) => theme.color.bg200};
  margin: 2rem;
  padding: 2rem;
  display: flex;
  /* flex-direction: column; */
  justify-content: space-around;
  gap: 6rem;
  align-items: stretch;

  & > div {
    display: flex;
    flex-direction: column;
  }
`;

const History = ({ userId }) => {
  return (
    <>
      <Container>
        <LC></LC>
        <HrC userId={userId}></HrC>
      </Container>
    </>
  );
};

export default History;
