import React from "react";
import ChatRoom from "components/organisms/ChatRoom";
import { CHeader } from "../styles/Chat.styled";
// import Header from "components/organisms/Header";
import BarIcon from "../components/atoms/BarIcon";
import LogoIcon from "../components/atoms/LogoIcon";
import Button from "../components/atoms/Button";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: calc(100vh - 12.8rem);
`;

const Chat = () => {
  return (
    // <Header/>
    <Container>
      <CHeader>
        <BarIcon />
        <LogoIcon />
        <Button text={"가입"} />
      </CHeader>
      <ChatRoom />
    </Container>
  );
};

export default Chat;
