//Main.jsx
import React, { useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import MainArticle from "../components/atoms/MainArticle";
import theme from "../styles/themeProvider/theme";
import Lottie from "../components/atoms/LottieComponent";
import learning from "../assets/learning.json";
import { useNavigate } from "react-router-dom";
import IH from "components/o/IH";
import DarkMode from "components/atoms/DarkMode";

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
  flex-direction: column;
  justify-content: space-around;
  align-items: stretch;
  /* gap: 6rem; */

  & > div {
    display: flex;
    flex-direction: column;
  }
`;
const Wrapper = styled.section`
  flex: 1 1 0;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${({ theme }) => theme.layout.margin.xl};
  /* margin: 0 2.8rem; */
  /* margin-top: 6rem; */
  /* height: 10%; */
`;
const Button = styled.button`
  width: 51.2rem;
  height: 6rem;
  background-color: #dae2f9;
  margin: 0 auto;
  border-radius: 1rem;
`;

const Main = ({ isUserActive, userId, ChangeTheme }) => {
  const navigate = useNavigate();

  useEffect(() => {
    const res = axios.get("http://localhost:8000/");
    console.log(res);
  }, []);
  const onClick = () => {
    const url = isUserActive ? "/main" : "/login";
    navigate(url);
  };
  return (
    <>
      <Container>
        {isUserActive ? (
          `로그인 중 : UserID :^ ${userId} ^ `
        ) : (
          <>
            <button onClick={() => ChangeTheme()}>
              비로그인 중 다크테마 테스트중{" "}
            </button>
          </>
        )}
        <IH></IH>
        <Wrapper>
          <MainArticle bgColor={theme.lightTheme.color.bg100}>
            <h1>CHAT FLOW-KR</h1>
            <h2>Chatflow는 AI와 현실 대화로,흐름을 이해하는</h2>
            <p>가장 효과적이고 효율적인 언어학습자의 능력향상 공부법입니다.</p>
            <Button onClick={onClick}>
              GET STARTED <span>It's free !</span>
            </Button>
          </MainArticle>
          <MainArticle bgColor="#dae2f9">
            <Lottie animationData={learning} />
          </MainArticle>
          {/*<MainArticle>Test</MainArticle>*/}
        </Wrapper>
        {/*<IC></IC>*/}
      </Container>
    </>
  );
};

export default Main;
