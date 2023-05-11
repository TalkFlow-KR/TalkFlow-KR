import React from "react";
import styled from "styled-components";
import ProfileIcon from "../a/ProfileIcon";

const Wrapper = styled.article`
  background-color: skyblue;
  width: 22.4rem;
  height: 16rem;
  margin: 1.6rem;
  border-radius: 0.8rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const UserInfo = ({ children }) => {
  return (
    <Wrapper>
      <ProfileIcon />
      TEST
      {children}
    </Wrapper>
  );
};

export default UserInfo;
