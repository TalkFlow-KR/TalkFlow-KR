import React from "react";
import styled from "styled-components";
import ChatItem from "../m/ChatItem";

const Wrapper = styled.section`
  width: 34.4rem;
  //height: 56.2rem;
  margin: 1.4rem;
  background-color: #eee;
  border-radius: 2rem;
`;
// 서버에서 채팅방 조회를 하여 map 함수돌려서 ChatItem 늘려야함.
// ㅊ
const Cl = () => {
  return (
    <Wrapper>
      <ChatItem></ChatItem>
    </Wrapper>
  );
};

export default Cl;
