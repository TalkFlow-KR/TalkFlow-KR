//Main.jsx
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import MainArticle from "../components/atoms/MainArticle";
import theme from "../styles/themeProvider/theme";
import Lottie from "../components/atoms/LottieComponent";
import learning from "../assets/learning.json";
import { useNavigate } from "react-router-dom";
import LOGO from "assets/logo.png";
import LOGO2 from "assets/logo2.png";
import DarkModeBtn from "../components/atoms/DarkModeBtn";
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
  ${({ theme }) => theme.shadow};

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
  & h1 {
    display: inline;
    font-size: 7.2rem;
    font-weight: 900;
    letter-spacing: -0.4rem;
    color: ${({ theme }) => theme.color.reverse};
  }
`;
const Button = styled.button`
  width: 51.2rem;
  height: 6rem;
  margin: 0 auto;
  border-radius: 1rem;
  font-weight: 900;
  background-color: ${({ theme }) => theme.color.primary100};
  ${({ theme }) => theme.shadow};

  & span {
    font-weight: 300;
  }
`;

const IndexHeader = styled.section`
  width: 100%;
  display: flex;
  /* flex: 1 1 0; */
  //min-width: 103.2rem;
  //max-width: 32rem;
  height: ${({ theme }) => theme.layout.height.top};
  //background-color: tan;
  background-color: ${({ theme }) => theme.color.bg100};
  /* background-color: transparent; */
  color: ${({ theme }) => theme.color.text100};
  border-radius: 1.2rem;
  font-size: ${({ theme }) => theme.fontSizes.main}rem;
  //flex: 0 1 0;
  //overflow-y: hidden;
  justify-content: space-between;
  align-items: center;
  ${({ theme }) => theme.shadow};

  & button {
    background-color: ${({ theme }) => theme.color.primary100};
    padding: 1.2rem 2rem;
    border-radius: 1.2rem;
    margin: 0 2rem;
    font-weight: 900;
    letter-spacing: -0.06rem;
    ${({ theme }) => theme.shadow};
  }
`;
const Logo = styled.div`
  padding: 1.2rem;
  display: flex;
  width: 26rem;
  font-weight: 900;
  user-select: none;
  justify-content: center;
  align-items: center;
  & img {
    width: 100%;
    height: 100%;
  }
`;
const Div = styled.div`
  margin: 2rem;
`;
const Highlight = styled.span`
  color: ${({ theme }) => theme.color.primary200};
`;
const Index = ({ isUserActive, userId, ChangeTheme, notify, mode }) => {
  const [isHover, setIsHover] = useState(false);
  const [isToast, setIsToast] = useState(false);
  const [logo, setLogo] = useState(false);
  const navigate = useNavigate();
  // useEffect(() => {
  //   // mode 값이 변경될 때마다 실행되는 부분
  // }, [mode]);
  useEffect(() => {
    setIsToast(false);
    // const res = axios.get("http://localhost:8000/");
    // console.log(res);
  }, []);

  const onClick = () => {
    setIsToast(true);
  };
  const handleChangeTheme = () => {
    ChangeTheme();
  };

  const onLogin = () => {
    notify("로그인 화면으로 이동합니다.!");
    setTimeout(() => {
      navigate("/login");
    }, 700);
  };
  useEffect(() => {
    if (isToast) {
      if (isUserActive) {
        notify("메인화면으로이동합니다");
        setTimeout(() => {
          navigate("/main");
        }, 850);
      } else {
        notify("진행하시려면 로그인 하셔야합니다 !");
        setTimeout(() => {
          navigate("/login");
        }, 850);
      }
    }
  }, [isToast, navigate, notify]);

  return (
    <>
      <Container>
        <IndexHeader>
          <Logo>
            <img src={mode === "light" ? LOGO : LOGO2} alt="logo" />
          </Logo>
          <button onClick={onLogin}>Login/Registry</button>
        </IndexHeader>
        {/*<Div onClick={handleChangeTheme}>*/}
        {/*  <DarkModeBtn mode={mode} />*/}
        {/*</Div>*/}
        <Wrapper>
          <MainArticle bgColor={theme.lightTheme.color.bg100}>
            <h1>CHAT FLOW</h1>
            <div> </div>
            <h2>
              저희 Chatflow는 창의적이고 <br />
              유용한 당신의
              <Highlight>언어 파트너</Highlight>
              입니다.
            </h2>
            <p>
              다양한 환경을 손쉽게 접근하여 회화를 실현하도록 도와드립니다.
              <br />
              Chatflow는 아직 실험 버전으로 부정확할 수 있습니다.
            </p>
            <Button onClick={onClick}>
              GET STARTED <span>It's free !</span>
            </Button>
          </MainArticle>
          <MainArticle bgColor="#dae2f9">
            <Lottie
              animationData={learning}
              speed={0.7}
              onMouseEnter={() => setIsHover(true)}
              onMouseLeave={() => setIsHover(false)}
              isPaused={isHover}
            />
          </MainArticle>
          {/*<MainArticle>Test</MainArticle>*/}
        </Wrapper>
        {/*<IC></IC>*/}
      </Container>
    </>
  );
};

export default Index;
