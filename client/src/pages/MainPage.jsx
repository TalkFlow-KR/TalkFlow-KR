import React from "react";
import Header from "../components/organisms/Header";
import Main from "../components/organisms/Main";
import styled from "styled-components";
import Aside from "components/organisms/Aside";
import ChatRoom from "components/organisms/ChatRoom";
import { Wrapper } from "styles/Aside.styled";

const Container = styled.section`
display: flex;
flex-direction: column;
height: calc(100vh - 12.8rem);
margin-top: 2.8rem;
overflow-y: scroll;
`

const MainPage = () => {
  return (
    <>
      <Header/>
      {/* <Wrapper>
        <Aside />
      </Wrapper> */}
      <Container>
        <Main />
        <ChatRoom/>
      </Container>
    </>
  );
};

export default MainPage;
