import React from "react";
import styled from "styled-components";
import UserNameArticle from "../molecules/UserNameArticle";
import TopArticle from "../molecules/TopArticle";

const TopSection = styled.section`
  display: flex;
  justify-content: center;
  background-color: teal;
`;
const Header = () => {
  return (
    <TopSection>
      <UserNameArticle />
      <TopArticle />
    </TopSection>
  );
};

export default Header;
