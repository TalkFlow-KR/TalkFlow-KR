//Main.jsx
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import LC from "../components/o/LC";
import MC from "../components/o/MC";
import HC from "components/o/HC";
import axios from "axios";
import Skeleton from "../components/molecules/Skeleton";

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
  justify-content: space-around;
  gap: 6rem;
  align-items: stretch;

  & > div {
    display: flex;
  }
`;

const Main = ({ isUserActive, userId }) => {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function loading() {
      setIsLoading(true);
      const data = 0;
      const res = await axios.post("https://localhost:8000/", data);
      console.log(res);
    }
    loading();
  }, []);
  return isLoading ? (
    <Skeleton />
  ) : (
    <Container>
      {isUserActive ? `로그인 중 : UserID :^ ${userId} ^ ` : "비로그인"}
      <LC></LC>
      <MC></MC>
    </Container>
  );
};

export default Main;
