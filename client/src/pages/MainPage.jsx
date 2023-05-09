import React from "react";
import Header from "../components/organisms/Header";
import Main from "../components/organisms/Main";
import styled from "styled-components";
import Aside from "components/organisms/Aside";
import { ChatCover } from "styles/Chat.styled";
import ChatComponent from "components/molecules/ChatComponent";

const MainLayout = styled.main`
  /* width: 100vw;
  height: 100%; */
  display: flex;
  background-color: tan;
  justify-content: center;

  /* @media screen { (max-width:{(props)=>props.theme.layout.width.mobile)}{
    ba
  } */
`;

const MainPage = () => {
  return (
    <div>
      <Header />
      <MainLayout>
        <Aside />
        <Main />
        <ChatCover />
        <ChatComponent />
      </MainLayout>
    </div>
  );
};

export default MainPage;
