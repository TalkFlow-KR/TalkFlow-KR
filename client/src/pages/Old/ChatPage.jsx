import React, { useEffect } from "react";
import Header from "../components/organisms/Header";
import Main from "../components/organisms/Main";
import styled from "styled-components";
import Aside from "components/organisms/Aside";
import ChatRoom from "components/organisms/ChatRoom";
// import { Wrapper } from "styles/Aside.styled";
import theme from "styles/themeProvider/theme";
import axios from "axios";

const Container = styled.section`
  /* background-color: ${(props) => theme.color.boxBackground};
  display: flex;
  flex-direction: column;
  height: calc(100vh - 12.8rem);
  margin-top: 2.8rem;
  overflow-y: scroll; */
  background-color: ${(props) => theme.color.boxBackground};
  display: flex;
  flex-direction: column;
  height: 92.4%;
  margin: 0 2.8rem;
  margin-top: 2.8rem;
  width: ${(props) => props.theme.layout.width.top};
  border-radius: ${(props) => props.theme.layout.radius.l};

  & > div {
    height: 100%;
    display: flex;
    flex: 1 1 0;
  }
  & > div > div {
    height: 100%;
    display: flex;
    flex: 1 1 0;
    width: 100%;
  }
`;

const Wrapper = styled.main`
  ${({ theme }) => theme.color.background}
  height: calc(100vh - 12.8rem);
  display: flex;

  justify-content: center;
`;
const ChatPage = () => {
  return (
    <>
      <Header />
      <Wrapper>
        <Container>
          {/* <Main /> */}
          <ChatRoom />
        </Container>
      </Wrapper>
    </>
  );
};

export default ChatPage;
