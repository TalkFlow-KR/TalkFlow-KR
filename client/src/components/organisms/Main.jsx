//Main.jsx
import React from "react";
import styled from "styled-components";
import RecentArticle from "../molecules/RecentArticle";
// import ChatComponent from "../molecules/ChatComponent";
import { MainChatComponent } from "styles/Chat.styled";
import { Box } from "styles/Article.styled";
import ChatComponent from "components/molecules/ChatComponent";
import theme from "styles/themeProvider/theme";

const TopSection = styled.section`
  display: flex;
  justify-content: center;
`;

const Main = () => {
  return (
    <>
    <TopSection>
      <RecentArticle />
    </TopSection>
    </>
  );
};

export default Main;
