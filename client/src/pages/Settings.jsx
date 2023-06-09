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
  height: 80vh;
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
    flex-direction: column;
  }
`;
// axios 가져오기
// login 유무 확인하기
const Settings = ({
  isUserActive,
  userId,
  userEmail,
  mode,
  ChangeTheme,
  setUserID,
}) => {
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
      `/room/make/${userId}`,
      settings
    );
    console.log(res);
    setData(res.data);
  };
  // userId,data,onSubmit,setSettings
  return (
    <>
      <Container>
        <LC
          mode={mode}
          ChangeTheme={ChangeTheme}
          userEmail={userEmail}
          userId={userId}
          setUserID={setUserID}
        />
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
