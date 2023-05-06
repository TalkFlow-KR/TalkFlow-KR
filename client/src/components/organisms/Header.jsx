import React from "react";
import UserNameArticle from "../molecules/UserNameArticle";
import TopArticle from "../molecules/TopArticle";
import styled from "styled-components";

const TopSection = styled.section`
  display: flex;
  justify-content: center;
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
