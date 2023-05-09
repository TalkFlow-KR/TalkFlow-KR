import React from "react";
import ChatRoom from "components/organisms/ChatRoom";
import { Header } from "../styles/Chat.styled";
import BarIcon from "../components/atoms/BarIcon";
import LogoIcon from "../components/atoms/LogoIcon";
import Button from "../components/atoms/Button";

const Chat = ()=>{
    return(
    <>
        <Header>
            <BarIcon/>
            <LogoIcon/>
            <Button text={"가입"}/>
        </Header>
    <ChatRoom/>
    </>

    )
}

export default Chat;
