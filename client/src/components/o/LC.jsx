//LeftSideComponent.jsx
import React from "react";
import styled from "styled-components";
import UserInfo from "../m/UserInfo";
import MenuItem from "../m/MenuItem";
import { Link } from "react-router-dom";

const Container = styled.section`
  width: ${({ theme }) => theme.layout.width.lc};
  width: 26.4rem;
  height: 100%;
  /* background-color: #ddd; */
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
  /* background-color: greenyellow; */
  background-color: #fff;
  /* background-color: ${({ theme }) => theme.color.bg100}; */
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

const LC = () => {
  return (
    <Container>
      <UserInfo />
      <MenuList>
        <Link to={"/main"}>
          <MenuItem>HOME</MenuItem>
        </Link>
        <Link to={"/newchat"}>
          <MenuItem>NEW CHAT</MenuItem>
        </Link>
        <Link to={"/history"}>
          <MenuItem>HISTORY</MenuItem>
        </Link>
        <Link to={"/notification"}>
          <MenuItem>NOTIFICATION</MenuItem>
        </Link>
      </MenuList>
      <button>DarkMode</button>
    </Container>
  );
};

export default LC;
