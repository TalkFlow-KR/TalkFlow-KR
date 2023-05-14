//LeftSideComponent.jsx
import React from "react";
import styled from "styled-components";
import UserInfo from "../m/UserInfo";
import MenuItem from "../m/MenuItem";
import { Link } from "react-router-dom";

// import homeIcon from "components/atoms/homeIcon";
import HomeIcon from "components/atoms/HomeIcon";
import DarkMode from "../atoms/DarkMode";
import PlusIcon from "components/atoms/PlusIcon";
import History from "components/atoms/History";
import Notice from "components/atoms/Notice";

// import One from "../atoms/One";
// import NewPro from "../atoms/NewPro";
// import Chatting from "components/atoms/Chatting";

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

const LC = () => {
  return (
    <Container>
      <UserInfo />
      <MenuList>
        <Link to={"/"}>
          <Wrapper>
            <HomeIcon />
            <MenuItem>HOME</MenuItem>
          </Wrapper>
        </Link>
        <Link to={"/newchat"}>
          <Wrapper>
            <PlusIcon />
            <MenuItem>CREATE</MenuItem>
          </Wrapper>
        </Link>
        <Link to={"/history"}>
          <Wrapper>
            <History />
            <MenuItem>HISTORY</MenuItem>
          </Wrapper>
        </Link>
        <Link to={"/notification"}>
          <Wrapper>
            <Notice />
            <MenuItem>NOTIFICATION</MenuItem>
          </Wrapper>
        </Link>
      </MenuList>
      <button>
        <DarkMode />
      </button>
    </Container>
  );
};

export default LC;
