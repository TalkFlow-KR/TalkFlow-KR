//LeftSideComponent.jsx
import React from "react";
import styled from "styled-components";
import UserInfo from "../m/UserInfo";
import MenuItem from "../m/MenuItem";

const Container = styled.section`
  width: 26.4rem;
  height: 100%;
  background-color: #ddd;
  background-color: ${({ theme }) => theme.color.bg100};
  border-radius: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const MenuList = styled.article`
  width: 22.4rem;
  height: 100%;
  //background-color: greenyellow;
  background-color: ${({ theme }) => theme.color.bg300};
  border-radius: 2rem;
  display: flex;
  margin: 1.6rem 0;
  flex-direction: column;
  align-items: center;
`;
const LC = () => {
  return (
    <Container>
      <UserInfo />
      <MenuList>
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
      </MenuList>
      <button>DarkMode</button>
    </Container>
  );
};

export default LC;
