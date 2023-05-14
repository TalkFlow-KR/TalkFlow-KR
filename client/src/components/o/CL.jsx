// ChatListComponent.jsx
import React from "react";
import styled from "styled-components";
import ChatItem from "../m/ChatItem";
import Search from "../m/Search";

const Wrapper = styled.section`
  height: 50vh;
  background-color: #eee;
  border-radius: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: auto;
  margin-left: 2rem;
  //margin-bottom: 11.2rem;
`;
const ChatList = styled.div``;
// 서버에서 채팅방 조회를 하여 map 함수돌려서 ChatItem 늘려야함.
// ㅊ
const CL = () => {
  return (
    <Wrapper>
      <Search />
      <ChatList>
        <ChatItem
          title={"Title"}
          lastMessage={"LastMessage"}
          w
          date="2099.09.26"
        />
        <ChatItem
          title={"Title2"}
          lastMessage={"LastMessage2"}
          date="2099.09.26"
        />
        <ChatItem
          title={"Title3"}
          lastMessage={"LastMessage3"}
          date="2099.09.26"
        />
        <ChatItem
          title={"Title3"}
          lastMessage={"LastMessage3"}
          date="2099.09.26"
        />
        <ChatItem
          title={"Title3"}
          lastMessage={"LastMessage3"}
          date="2099.09.26"
        />
        <ChatItem
          title={"Title3"}
          lastMessage={"LastMessage3"}
          date="2099.09.26"
        />
        <ChatItem
          title={"Title3"}
          lastMessage={"LastMessage3"}
          date="2099.09.26"
        />{" "}
        <ChatItem
          title={"Title3"}
          lastMessage={"LastMessage3"}
          date="2099.09.26"
        />{" "}
        <ChatItem
          title={"Title3"}
          lastMessage={"LastMessage3"}
          date="2099.09.26"
        />{" "}
        <ChatItem
          title={"Title3"}
          lastMessage={"LastMessage3"}
          date="2099.09.26"
        />
      </ChatList>
    </Wrapper>
  );
};

export default CL;
