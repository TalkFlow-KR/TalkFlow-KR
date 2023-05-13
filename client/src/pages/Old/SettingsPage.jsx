import React from "react";
import Header from "../components/organisms/Header";
import Main from "../components/organisms/Main";
import styled from "styled-components";
import Aside from "components/organisms/Aside";
import ChatRoom from "components/organisms/ChatRoom";
// import { Wrapper } from "styles/Aside.styled";
import theme from "../styles/themeProvider/theme";
import Settings from "./Settings";

const Container = styled.section`
  background-color: ${({ theme }) => theme.color.bg100};
  display: flex;
  flex-direction: column;
  height: 92.4%;
  margin: 0 2.8rem;
  margin-top: 2.8rem;
  width: ${({ theme }) => theme.layout.width.top};
  border-radius: ${({ theme }) => theme.layout.radius.l};

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
`;

const SettingsPage = () => {
  return (
    <>
      <Header />
      <Wrapper>
        <Container>
          <Settings />
        </Container>
      </Wrapper>
    </>
  );
};

export default SettingsPage;
