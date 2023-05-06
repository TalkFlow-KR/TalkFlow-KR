import React from "react";
import LogoIcon from "../atoms/LogoIcon";
import styled from "styled-components";

const Wrapper = styled.article`
  width: 22.2rem;
  height: 10rem;
  background-color: tan;
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
