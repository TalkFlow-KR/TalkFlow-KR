//LeftSideComponent.jsx
import React, { useState } from "react";
import styled from "styled-components";
import UserInfo from "../m/UserInfo";
import MenuItem from "../m/MenuItem";
import { Link } from "react-router-dom";

// import homeIcon from "components/atoms/homeIcon";

import Lottie from "components/atoms/LottieComponent";
import home from "assets/home.json";
import history from "assets/history.json";
import notice from "assets/noti.json";
import plus from "assets/plus.json";

import DarkModeBtn from "../atoms/DarkModeBtn";

// import One from "../atoms/One";
// import NewPro from "../atoms/NewPro";
// import Chatting from "components/atoms/Chatting";

const Container = styled.section`
  width: ${({ theme }) => theme.layout.width.lc};
  width: 26.4rem;
  height: 100%;
  /* background-color: ${({ theme }) => theme.color.bg100}; */
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
  background-color: ${({ theme }) => theme.color.bg200};
  border-radius: 2rem;
  display: flex;
  margin: 1.6rem 0;
  flex-direction: column;
  align-items: center;

  @media (max-width: 900px) {
    width: ${({ theme }) => theme.layout.width.tabletLc};
    /* background-color: ${({ theme }) => theme.color.bg100}; */
  }
`;

const Wrapper = styled.button`
  width: 18.8rem;
  height: 4rem;
  /* height: 100%; */
  margin: 1rem;
  padding: 0 1rem;
  border-radius: 2rem;
  /* background-color: #fff; */
  display: flex;
  /* justify-content: center; */
  align-items: center;
  justify-content: space-between;
  /* background-color: tomato; */
  background-color: ${({ theme }) => theme.color.bg200};

  &:hover {
    /* background-color: ${({ theme }) => theme.color.bg300}; */
    /* background-color: #fff; */
    transition: all 0.2s ease-in-out;
    transform: scale(1.5);
  }
  @media (max-width: 900px) {
    width: ${({ theme }) => theme.layout.width.tabletLc};
    justify-content: center;
    width: 5rem;
  }
  & > span {
    /* height: 4rem; */
    /* height: 100%; */
    /* margin: 1rem; */
    /* padding: 0 1rem; */
    /* border-radius: 2rem; */
    /* background-color: #fff; */
    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: 900px) {
      display: none;
    }
  }
`;

const Icon = styled.div`
  width: 2.5rem;
  height: 2.5rem;
`;

const LC = ({ mode, ChangeTheme, userEmail }) => {
  const [isHover, setIsHover] = useState(false);
  const [isHover2, setIsHover2] = useState(false);
  const [isHover3, setIsHover3] = useState(false);
  const [isHover4, setIsHover4] = useState(false);
  const handleChangeTheme = () => {
    ChangeTheme();
  };
  return (
    <Container>
      <UserInfo userEmail={userEmail} />
      <MenuList>
        <Link to={"/main"}>
          <Wrapper
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}>
            <Icon>
              <Lottie
                animationData={home}
                isStopped={!isHover}
                style={{ width: "4rem", height: "4rem" }}
                loop={false}
              />
            </Icon>
            <MenuItem>MAIN</MenuItem>
          </Wrapper>
        </Link>
        <Link to={"/newChat"}>
          <Wrapper
            onMouseEnter={() => setIsHover2(true)}
            onMouseLeave={() => setIsHover2(false)}>
            <Lottie
              animationData={plus}
              isStopped={!isHover2}
              style={{ width: "4rem", height: "4rem" }}
              loop={false}
            />
            <MenuItem>CREATE</MenuItem>
          </Wrapper>
        </Link>
        <Link to={"/history"}>
          <Wrapper
            onMouseEnter={() => setIsHover3(true)}
            onMouseLeave={() => setIsHover3(false)}>
            <Lottie
              animationData={history}
              isStopped={!isHover3}
              style={{ width: "4rem", height: "4rem" }}
              loop={false}
            />
            <MenuItem>HISTORY</MenuItem>
          </Wrapper>
        </Link>
        <Link to={"/notification"}>
          <Wrapper
            onMouseEnter={() => setIsHover4(true)}
            onMouseLeave={() => setIsHover4(false)}>
            <Lottie
              animationData={notice}
              isStopped={!isHover4}
              speed={1.5}
              style={{ width: "4rem", height: "4rem" }}
              loop={false}
            />
            <MenuItem>NOTIFICATION</MenuItem>
          </Wrapper>
        </Link>
      </MenuList>

      <div onClick={handleChangeTheme}>
        <DarkModeBtn mode={mode} />
      </div>
    </Container>
  );
};

export default LC;
