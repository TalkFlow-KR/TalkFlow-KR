//First.jsx
import React from "react";
import { Link } from "react-router-dom";
import MainArticle from "../atoms/MainArticle";
import styled from "styled-components";
import learning from "assets/learning.json";
import Lottie from "../atoms/LottieComponent";
import theme from "../../styles/themeProvider/theme";

const Wrapper = styled.section`
  flex: 1 1 0;
  display: flex;
  /* justify-content: space-around; */
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

// { ...props} 로 보내서 Article 마다 스타일 차별화 주기

//	flex: ${(props) => props.flex}; // props 가 있다면 적용
// 	border: ${(props) => (props.outline === 'none' ? 'none' : `0.7px solid ${props.outline}`)}; props 가없다면 기본값 적용
// 	background: ${(props) => (props.transparent ? 'transparent' : props.bgColor)};
// 	color: ${(props) => props.color};

const First = () => {
  return (
    <>
      <Wrapper>
        <MainArticle bgColor={theme.lightTheme.color.bg100}>
          <h1>CHAT FLOW-KR</h1>
          <h2>Chatflow는 AI와 현실 대화로,흐름을 이해하는</h2>
          <p>가장 효과적이고 효율적인 언어학습자의 능력향상 공부법입니다.</p>
          <Link to="/">
            <Button>
              GET STARTED <span>It's free !</span>
            </Button>
          </Link>
        </MainArticle>

        <MainArticle bgColor="#dae2f9">
          <Lottie animationData={learning} />
        </MainArticle>
        {/*<MainArticle>Test</MainArticle>*/}
      </Wrapper>
    </>
  );
};

export default First;
