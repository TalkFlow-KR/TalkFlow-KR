import React from "react";
import styled from "styled-components";

const Btn = styled.button`
  border-radius: 0.8rem;
  width: 100%;
  color: black;
  margin: 0.4rem 0;
  background-color: #fff;
  //padding: 1.2rem;
`;

const SettingItem = ({ onSelectButton }) => {
  const onClick = (number) => {
    onSelectButton(number);
    console.log(number);
  };
  // onCustom 을 하기위해
  // input 모달창 띄우기
  // inpurt 창 확인누르면
  // setState의 값 넣기
  // onSelectbutton 에게 값 보내주기
  const onCustom = () => {
    onSelectButton(-1);
  };
  return (
    <div>
      <Btn onClick={() => onClick(0, "영어")}>영어</Btn>
      <Btn onClick={() => onClick(0, "한국어")}>한국어</Btn>
      <Btn onClick={onCustom}>다른 언어</Btn>
    </div>
  );
};

export default SettingItem;
