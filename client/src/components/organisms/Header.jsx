import React from "react";
import styled from "styled-components";
import TopArticle from "../molecules/TopArticle";

const TopSection = styled.section`
  display: flex;
  justify-content: center;
`;
const Header = () => {
  return (
    <TopSection>
      <TopArticle />
    </TopSection>
  );
};

export default Header;
