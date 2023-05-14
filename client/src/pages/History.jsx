//History.jsx
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import LC from "../components/o/LC";
import IC from "components/o/IC";
import HrC from "components/o/HrC";
import axios from "axios";

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
const Main = () => {
  const userid = "32b16654-e983-47ef-a382-eb3bf1f9b789";
  const [roomNumber, setRoomNumber] = useState();

  useEffect(() => {
    axios
      .get(`http://localhost:8000/room/all/${userid}`)
      .then((res) => {
        setRoomNumber(res.data);
        console.log("res: ", res.data); // 방번호 받아오기
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // 빼온 방번호 roomNumber에 담아놓았음

  return (
    <>
      <Container>
        <LC></LC>
        <HrC roomNumber={roomNumber}></HrC>
      </Container>
    </>
  );
};

export default Main;
