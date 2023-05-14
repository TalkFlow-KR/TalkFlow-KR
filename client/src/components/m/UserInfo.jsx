import React, { useState } from "react";
import styled from "styled-components";
import ProfileIcon from "../a/ProfileIcon";
import { Link } from "react-router-dom";
import Lottie from "../atoms/LottieComponent";
import animationData from "../../assets/82473-login.json";
import LogoIcon from "../a/LogoIcon";

const Wrapper = styled.article`
  background-color: ${({ theme }) => theme.color.primary100};
  /* width: 22.4rem; */
  width: ${({ theme }) => theme.layout.width.left};
  height: 16rem;
  margin: 1.6rem;
  border-radius: 0.8rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;

  @media (max-width: 900px) {
    width: ${({ theme }) => theme.layout.width.tabletLc};
    background-color: ${({ theme }) => theme.color.bg100};
  }
`;

const Btn = styled.ul`
  //background-color: #fff;
  border-radius: 0.8rem;
  padding: 0 0.8rem;
`;
const LoginButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
`;
const UserInfo = ({ children }) => {
  const [isHover, setIsHover] = useState(false);
  return (
    <>
      <Wrapper>
        <LogoIcon />
        <Btn>
          <Link to={"/Login"}>
            <LoginButton
              onMouseEnter={() => setIsHover(true)}
              onMouseLeave={() => setIsHover(false)}>
              Login / Register
              <Lottie
                animationData={animationData}
                isStopped={!isHover}
                style={{ width: "4rem", height: "4rem" }}
              />
            </LoginButton>
          </Link>
        </Btn>
        {children}
      </Wrapper>
    </>
  );
};

export default UserInfo;
