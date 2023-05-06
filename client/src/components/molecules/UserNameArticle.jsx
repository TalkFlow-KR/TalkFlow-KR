import React from "react";
import LogoIcon from "../atoms/LogoIcon";
import styled from "styled-components";

const Wrapper = styled.article`
  width: 22.2rem;
  height: 10rem;
  padding:0 1.2rem;
  background-color: tan;
  display: flex;
  justify-content: start;
  align-items: center;
  border-radius: 0.8rem;
`
const UserNameArticle = () => {
  return (
    <Wrapper>
      <LogoIcon />
      <h2>userName</h2>
    </Wrapper>
  );
};

export default UserNameArticle;
