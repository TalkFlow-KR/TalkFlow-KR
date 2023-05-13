//Main.jsx
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import LC from "../components/o/LC";
// import MC from "../components/o/MC";
import NewS from "components/o/NewS";
import axios from "axios";
import { useNavigate } from "react-router-dom";

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
// axios 가져오기
// login 유무 확인하기
const Settings = ({ isUserActive, userId }) => {
  const [data, setData] = useState("");
  const [settings, setSettings] = useState({});
  const navigate = useNavigate();

  // // 로그인 되어있는지 확인
  // useEffect(() => {
  //   if (!userId) {
  //     navigate("/login");
  //   }
  // }, [navigate, userId]);

  const handleSubmit = async (payload) => {
    console.log(payload);
    const res = await axios.post(
      `http://localhost:8000/room/make/${userId}`,
      settings
    );
    console.log(res);
    setData(res.data);
  };
  // userId,data,onSubmit,setSettings
  return (
    <>
      <Container>
        {isUserActive ? `로그인 중 : UserID :^ ${userId} ^ ` : "비로그인"}

        <LC />
        <NewS
          userId={userId}
          data={data}
          onSubmit={handleSubmit}
          setSettings={setSettings}
        />
      </Container>
    </>
  );
};

export default Settings;
