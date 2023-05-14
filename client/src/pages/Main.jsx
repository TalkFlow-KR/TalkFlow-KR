//Main.jsx
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import LC from "../components/o/LC";
import MC from "../components/o/MC";
import axios from "axios";
import Skeleton from "../components/molecules/Skeleton";

const Container = styled.main`
  flex: 1 1 0;
  width: 100vw;
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
  justify-content: space-around;
  gap: 6rem;
  align-items: stretch;

  & > div {
    display: flex;
  }
`;

const Main = ({ isUserActive, userId, mode, ChangeTheme, userEmail }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function loading() {
      setIsLoading(false);
      const data = 0;
      const res = await axios.post(`${process.env.REACT_APP_DB_HOST}/`, data);
      console.log(res);
    }
    loading();
  }, []);
  return isLoading ? (
    <Skeleton />
  ) : (
    <Container>
      <LC mode={mode} ChangeTheme={ChangeTheme} userEmail={userEmail} />
      <MC></MC>
    </Container>
  );
};

export default Main;
