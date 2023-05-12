import React from "react";
import styled from "styled-components";
import ProfileIcon from "../a/ProfileIcon";
import { Link } from "react-router-dom";

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

  @media (max-width: 900px) {
    width: ${({ theme }) => theme.layout.width.tabletLc};
    background-color: ${({ theme }) => theme.color.bg100};
  }
`;

const LogBtn = styled.button`
  font-size: 1.2rem;
  background-color: transparent;
`;

const UserInfo = ({ children }) => {
  return (
    <>
      <Wrapper>
        <ProfileIcon />
        <ul>
          <Link to={"/Login"}>
            <LogBtn>login / </LogBtn>
          </Link>
          <Link to={"/Register"}>
            <LogBtn> / register</LogBtn>
          </Link>
        </ul>
        {children}
      </Wrapper>
    </>
  );
};

export default UserInfo;
