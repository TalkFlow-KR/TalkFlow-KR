//SuccessRegister.jsx
import React, { useEffect } from "react";
import styled from "styled-components";
import Lottie from "components/atoms/LottieComponent";
import Cong from "assets/cong.json";
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
  flex-direction: column;
  justify-content: space-around;
  gap: 6rem;
  align-items: stretch;

  & > div {
    display: flex;
    flex-direction: column;
  }
`;
const Wrapper = styled.section`
  flex: 1 1 0;
  display: flex;
  flex-direction: column;
  //width: 107.2rem;
  //height: 70rem;
  //height: 100%;
  border-radius: 2rem;
  background-color: ${({ theme }) => theme.color.bg100};
  //justify-content: center;
  align-items: center;
  gap: 2rem;
  //margin: 2rem;
  overflow: hidden;
`;
const ContentsBox = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-bottom: 11.2rem;

  & h1 {
    text-align: center;
    font-weight: 900;
    font-size: 4.8rem;
  }
`;
const SuccessRegister = () => {
  const navigate = useNavigate();
  useEffect(() => {
    setInterval(() => {
      navigate("/login");
    }, 3000);
  }, []);
  return (
    <>
      <Container>
        <Wrapper>
          <ContentsBox>
            <Lottie animationData={Cong} loop={false} />
            <h1>
              회원가입 성공 ! <br />
              로그인 페이지로 리다이렉트 합니다
            </h1>
          </ContentsBox>
        </Wrapper>
      </Container>
    </>
  );
};

export default SuccessRegister;
