//Main.jsx
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import LC from "../components/o/LC";
import MC from "../components/o/MC";
import axios from "axios";
import Skeleton from "../components/molecules/Skeleton";
import mainImg1 from "assets/mainImg1.jpg";
import mainImg2 from "assets/mainImg2.jpg";
import mainImg3 from "assets/mainImg3.jpg";
import mainImg4 from "assets/mainImg4.jpg";

const Container = styled.main`
  flex: 1 1 0;
  //width: 100vw;
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
  align-items: center;

  & > div {
    display: flex;
  }
`;
const Wrapper = styled.section`
  background-color: ${({ theme }) => theme.color.primary200};
  color: ${({ theme }) => theme.color.text200};
  width: 25.7rem;
  height: 100%;
  border-radius: 2rem;
  display: flex;
  flex-direction: column;
  padding: 2rem;
  margin: 2rem;
  ${({ theme }) => theme.shadow};

  & button {
    padding: 1.2rem;
  }
  & h1 {
    font-size: 4rem;
  }
  & span {
    font-weight: 900;
  }
`;
const Box = styled.section`
  position: relative;
  background-color: ${({ theme }) => theme.color.accent200};
  width: 100%;
  height: 100%;
  border-radius: 3.2rem;
  ${({ theme }) => theme.shadow};

  & img {
    width: 100%;
    height: 100%;
    border-radius: 3.2rem;
    object-fit: cover;
  }
`;
const Overlay = styled.div`
  border-radius: 3.2rem;

  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
  user-select: none;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    90deg,
    hsla(0, 0%, 0%, 4) -140%,
    hsla(0, 0%, 100%, 0) 150%
  );
`;
const Main = ({
  isUserActive,
  userId,
  mode,
  ChangeTheme,
  userEmail,
  setUserID,
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [img, setImg] = useState(null);
  const mainImg = [mainImg1, mainImg2, mainImg3, mainImg4];

  useEffect(() => {
    setImg(Math.floor(Math.random() * mainImg.length));
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  const onLoad = () => {
    setIsLoading(false);
  };
  return (
    <>
      {isLoading ? <Skeleton /> : null}
      <Container>
        <LC
          mode={mode}
          ChangeTheme={ChangeTheme}
          userEmail={userEmail}
          userId={userId}
          setUserID={setUserID}
        />
        <Box>
          <Overlay></Overlay>
          <img src={mainImg[img]} alt="" onLoad={onLoad} />
        </Box>
        <Wrapper>
          <h1>ChatFlow</h1>
          <h2>회화의 모든 것, ChatFlow에서 </h2>
          <br />
          <p>
            ChatFlow는 회화의 한 획을 바꾸고 싶은 생각만 해도 가슴 뛰는 목표가
            있는 조직입니다. 어렵고, 불편하고, 멀게 느껴지는 회화 공부가 아닌
            누구에게나 쉽고 효율적인 회화를 만드는 것입니다.
          </p>
          <br />
          <span>- JJY</span>
        </Wrapper>
      </Container>
    </>
  );
};

export default Main;
