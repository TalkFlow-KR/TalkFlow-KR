// ChatSettingComponent.jsx
import React, { useState } from "react";
import styled from "styled-components";
import ChatItem from "../m/ChatItem";
import Search from "../m/Search";
import SettingItem from "../m/SettingItem";

const Wrapper = styled.section`
  background-color: #eee;
  border-radius: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  margin: 2rem;
  overflow-y: auto;
  overflow-x: hidden;
  & button {
    padding: 1.2rem;
  }
`;

const OptBtn = styled.button`
  width: 100%;
  text-align: center;
  margin: 2rem;
  font-size: 4rem;
  border-radius: 0.8rem;
  background-color: ${({ theme }) => theme.color.accent100};
  color: ${({ theme }) => theme.color.text200};
  font-weight: 900;
  padding: 0 1.2rem;
  &:hover {
    color: #444;
  }
`;

const Cs = () => {
  const [isOpen, setIsOpen] = useState([false, false, false]);
  const [option0, setOption0] = useState("");
  const [option1, setOption1] = useState("");
  const [option2, setOption2] = useState("");
  const onClick = (number, option) => {
    const newIsOpen = isOpen.map((v, i) => (i === number ? !v : false));
    setIsOpen(newIsOpen);
  };

  // 1번 옵션(0)버튼의 하위 태그버튼들 클릭시 0번의 n번옵션이라고 알려준뒤 useState에 저장
  return (
    <Wrapper>
      <OptBtn onClick={() => onClick(0)}>option1</OptBtn>
      {isOpen[0] && <SettingItem onClick={onClick} option={0} />}
      <OptBtn onClick={() => onClick(1)}>option2</OptBtn>
      {isOpen[1] && <SettingItem onClick={onClick} option={1} />}
      <OptBtn onClick={() => onClick(2)}>option3</OptBtn>
      {isOpen[2] && <SettingItem onClick={onClick} option={2} />}
      <button>Start a chat</button>
    </Wrapper>
  );
};
export default Cs;
