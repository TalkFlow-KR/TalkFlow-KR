import React, { useState } from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import Lottie from "../atoms/LottieComponent";
import animationData from "../../assets/82473-login.json";
import * as PropTypes from "prop-types";

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
  & p {
    font-size: 1.2rem;
  }
`;
const LogOutBtn = styled.div`
  cursor: pointer;
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
  font-size: 1.5rem;
  font-weight: 700;
  color: ${({ theme }) => theme.color.text200};
`;

const UserBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
  text-align: center;
  position: relative;
  ${({ theme }) => theme.shadow};
  & .logout-modal {
    cursor: pointer;
    width: 10rem;
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 1.2rem 1.4rem;
    background-color: ${({ theme }) => theme.color.bg200};
    color: ${({ theme }) => theme.color.text200};
    border-radius: 4rem;
    ${({ theme }) => theme.shadow};
  }
`;

const UserInfo = ({ userEmail, children, setUserID }) => {
  const navigate = useNavigate();
  const [isHover, setIsHover] = useState(false);
  const [isShow, setIsShow] = useState(false);
  const onClick = () => {
    setIsShow(!isShow);
  };
  const onLogout = () => {
    setUserID("");
    navigate("/");
  };
  return (
    <>
      <Wrapper>
        {userEmail ? (
          <>
            <UserBox>
              <LogOutBtn onClick={onClick}>
                <p>환영합니다.</p>
                <h2>{userEmail}</h2>
              </LogOutBtn>
              {isShow && (
                <div className="logout-modal">
                  <p onClick={onLogout}>로그아웃</p>
                </div>
              )}
            </UserBox>
          </>
        ) : (
          <>
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
          </>
        )}
      </Wrapper>
    </>
  );
};

export default UserInfo;
