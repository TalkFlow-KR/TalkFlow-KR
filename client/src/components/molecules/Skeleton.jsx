//Main.jsx
import React, { useEffect } from "react";
import styled from "styled-components";
import axios from "axios";

const Container = styled.main`
  position: absolute;
  flex: 1 1 0;
  height: 80vh;
  width: Calc(100vw - 8rem);
  border-radius: 2rem;
  background-color: ${({ theme }) => theme.color.bg200};

  margin: 2rem;
  padding: 2rem;
  display: flex;
  justify-content: space-around;
  gap: 6rem;
  align-items: stretch;
  z-index: 100;
  & > div {
    display: flex;
  }
`;
const Container2 = styled.div`
  width: ${({ theme }) => theme.layout.width.lc};
  height: 100%;
  border-radius: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 900px) {
    width: 10rem;
  }
`;
const MenuList = styled.article`
  width: 22.4rem;
  height: 100%;

  background-color: ${({ theme }) => theme.color.bg300};

  border-radius: 2rem;
  display: flex;
  margin: 1.6rem 0;
  flex-direction: column;
  align-items: center;

  @media (max-width: 900px) {
    width: ${({ theme }) => theme.layout.width.tabletLc};
  }
`;

const Container3 = styled.article`
  background-color: ${({ theme }) => theme.color.bg300};
  /* width: 22.4rem; */
  width: ${({ theme }) => theme.layout.width.left};
  height: 16rem;
  margin: 1.6rem;
  border-radius: 0.8rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 900px) {
    width: ${({ theme }) => theme.layout.width.tabletLc};
  }
`;

const MenuItem = styled.div`
  width: 18.8rem;
  height: 4rem;
  /* height: 100%; */
  margin: 1rem;
  border-radius: 2rem;
  background-color: ${({ theme }) => theme.color.bg300};
  animation: ${({ theme }) => theme.animation.shimmer.keyframes}
    ${({ theme }) => theme.animation.shimmer.duration}
    ${({ theme }) => theme.animation.shimmer.timingFunction}
    ${({ theme }) => theme.animation.shimmer.iterationCount};
  background: ${({ theme }) => theme.background};
  @media (max-width: 900px) {
    width: ${({ theme }) => theme.layout.width.tabletLc};
  }
`;

const LogBtn = styled.div`
  width: 8rem;
  height: 2rem;
  padding: 0.4rem;
  background-color: ${({ theme }) => theme.color.accent100};
  animation: ${({ theme }) => theme.animation.shimmer.keyframes}
    ${({ theme }) => theme.animation.shimmer.duration}
    ${({ theme }) => theme.animation.shimmer.timingFunction}
    ${({ theme }) => theme.animation.shimmer.iterationCount};
  background: ${({ theme }) => theme.background};

  border-radius: 1.2rem;
`;

const ProfileIcon = styled.div`
  margin: 0.8rem;
  width: 6rem;
  height: 6rem;
  & div {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.color.bg300};

    animation: ${({ theme }) => theme.animation.shimmer.keyframes}
      ${({ theme }) => theme.animation.shimmer.duration}
      ${({ theme }) => theme.animation.shimmer.timingFunction}
      ${({ theme }) => theme.animation.shimmer.iterationCount};
    background: ${({ theme }) => theme.background};
  }
`;
const Container4 = styled.div`
  height: 100%;
  flex: 1 1 0;
  display: flex;
  flex-direction: column;
  border-radius: 2rem;
  background-color: ${({ theme }) => theme.color.bg300};

  //align-items: center;
  gap: 2rem;
  overflow: hidden;
`;

const ContentsBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  flex-direction: row-reverse;
  padding: 0 20rem;
  gap: 6rem;
`;
const HC = styled.section`
  flex: 1 1 0;
  height: 5.6rem;
  border-radius: 1.2rem;
  padding: 1.2rem;
  margin: 2rem;
  animation: ${({ theme }) => theme.animation.shimmer.keyframes}
    ${({ theme }) => theme.animation.shimmer.duration}
    ${({ theme }) => theme.animation.shimmer.timingFunction}
    ${({ theme }) => theme.animation.shimmer.iterationCount};
  background: ${({ theme }) => theme.background};
`;
const Container5 = styled.div`
  width: 70rem;
  height: 65vh;
  background-color: ${({ theme }) => theme.color.bg200};

  border-radius: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  margin: 2rem;
  overflow-y: auto;
  overflow-x: hidden;
  position: relative;

  & div {
    padding: 1.2rem;
  }
`;

const OptBtn = styled.div`
  width: 100%;
  text-align: left;
  font-size: 2.2rem;
  font-weight: 700;
  background-color: ${({ theme }) => theme.color.accent100};
  border-radius: 1.2rem;
  margin: 0.4rem;
  height: 5.7rem;
  animation: ${({ theme }) => theme.animation.shimmer.keyframes}
    ${({ theme }) => theme.animation.shimmer.duration}
    ${({ theme }) => theme.animation.shimmer.timingFunction}
    ${({ theme }) => theme.animation.shimmer.iterationCount};
  background: ${({ theme }) => theme.background};

  &:hover {
    color: #444;
  }
`;

const Btn = styled(OptBtn)`
  position: absolute;
  width: 21.7rem;
  bottom: 0;
`;
const Container6 = styled.section`
  width: 20rem;
  background-color: ${({ theme }) => theme.color.bg200};

  border-radius: 2rem;
  flex-direction: column;
  padding: 2rem;
  margin: 2rem;
  & button {
    padding: 1.2rem;
  }
  & h2,
  h3,
  h4,
  h5 {
    margin: 0.4rem;
    border-radius: 0.8rem;
    background-color: ${({ theme }) => theme.color.accent100};
    padding: 0.4rem;
    animation: ${({ theme }) => theme.animation.shimmer.keyframes}
      ${({ theme }) => theme.animation.shimmer.duration}
      ${({ theme }) => theme.animation.shimmer.timingFunction}
      ${({ theme }) => theme.animation.shimmer.iterationCount};
    background: ${({ theme }) => theme.background};
  }
  & h2 {
    width: 30%;
    height: 8rem;
  }
  & h3 {
    width: 60%;
    height: 4rem;
  }
  & h4 {
    height: 42rem;
  }
  & h5 {
    width: 70%;
    height: 4rem;
  }
  & div {
    border-radius: 1.2rem;
  }
`;
const Container7 = styled.section`
  display: flex;
  align-items: center;
  overflow: hidden;
`;

const Div = styled(MenuItem)``;
const Sk = {
  ProfileIcon,
  LogBtn,
  Container,
  Container2,
  Container3,
  Container4,
  Container5,
  Container6,
  Container7,
  ContentsBox,
  HC,
  Div,
};

const Skeleton = ({ isUserActive, userId }) => {
  useEffect(() => {
    const data = 0;
    const res = axios.post(`${process.env.REACT_APP_DB_HOST}`, data);
    console.log(res);
  }, []);
  return (
    <Sk.Container>
      <Sk.Container2>
        <Sk.Container3>
          <Sk.ProfileIcon>
            <div></div>
          </Sk.ProfileIcon>
          <Sk.LogBtn>
            <li></li>
            <li></li>
          </Sk.LogBtn>
        </Sk.Container3>
        <MenuList>
          <MenuItem></MenuItem>
          <MenuItem></MenuItem>
          <MenuItem></MenuItem>
          <MenuItem></MenuItem>
        </MenuList>
        <Div></Div>
      </Sk.Container2>
      <Sk.Container4>
        <Sk.ContentsBox>
          <Sk.Container6>
            <h2> </h2>
            <h3> </h3>
            <h4> </h4>
            <h5> </h5>
          </Sk.Container6>
          <Sk.Container7>
            <Sk.Container5>
              <OptBtn></OptBtn>
              <OptBtn></OptBtn>
              <OptBtn></OptBtn>
              <Btn></Btn>
            </Sk.Container5>
          </Sk.Container7>
        </Sk.ContentsBox>
      </Sk.Container4>
    </Sk.Container>
  );
};

export default Skeleton;
