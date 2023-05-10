import React from "react";
import Header from "../components/organisms/Header";
import Main from "../components/organisms/Main";
import styled from "styled-components";
import Aside from "components/organisms/Aside";
import ChatRoom from "components/organisms/ChatRoom";
// import { Wrapper } from "styles/Aside.styled";
import theme from "styles/themeProvider/theme";
import Settings from "./Settings";

const Container = styled.section`
  background-color: ${(props) => theme.color.boxBackground};
  display: flex;
  flex-direction: column;
  height: 92.4%;
  margin: 0 2.8rem;
  margin-top: 2.8rem;

  /* overflow-y: scroll; */
  /* width: ${(props) => props.theme.layout.width.main}; */
  width: ${(props) => props.theme.layout.width.top};

  border-radius: ${(props) => props.theme.layout.radius.l};

  & > div {
    height: 100%;
    display: flex;
    flex: 1 1 0;
  }
`;

const Wrapper = styled.main`
  background-color: tan;
  height: calc(100vh - 12.8rem);
  display: flex;

  justify-content: center;
  /* width: ${(props) => props.theme.layout.width.top}; */
`;

const SettingsPage = () => {
  return (
    <>
      <Header />
      {/* <Wrapper>
        <Aside />
      </Wrapper> */}
      <Wrapper>
        <Container>
          {/* <Main /> */}
          <Settings />
          {/* <ChatRoom /> */}
        </Container>
      </Wrapper>
    </>
  );
};

export default SettingsPage;
