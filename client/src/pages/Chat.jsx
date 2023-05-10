import React from "react";
import ChatRoom from "components/organisms/ChatRoom";
import { Header } from "../styles/Chat.styled";
import BarIcon from "../components/atoms/BarIcon";
import LogoIcon from "../components/atoms/LogoIcon";
import Button from "../components/atoms/Button";
import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    height: calc(100vh - 12.8rem);
    /* width: ${(props)=> props.theme.layout.width.main}; */
    `

const Chat = ()=>{
    return(
    <Container>
        <Header>
            <BarIcon/>
            <LogoIcon/>
            <Button text={"가입"}/>
        </Header>
        {/* <ChatRoom/> */}
    </Container>

    )
}

export default Chat;
