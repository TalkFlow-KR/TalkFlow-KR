// Home > HW > 소개
import React, { useState } from "react";
import styled from "styled-components";
import SettingItem from "../m/SettingItem";

const Wrapper = styled.section`
  width: 25.7rem;
  height: 50vh;
  background-color: #eee;
  border-radius: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  margin: 2rem;
  overflow-y: auto;
  overflow-x: hidden;
  position: relative;
  & button {
    padding: 1.2rem;
  }
`;

const OptBtn = styled.button`
  width: 100%;
  text-align: left;
  font-size: 2.2rem;
  font-weight: 700;
  //background-color: ${({ theme }) => theme.color.accent100};
  color: ${({ theme }) => theme.color.text200};
  &:hover {
    color: #444;
  }
 k
`;

const Btn = styled.button`
  position: absolute;
  bottom: 0;
`;

const CS = () => {
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
      <h2>TalkFlow</h2>
      <h2>회화의 모든 것, TalkFlow에서 </h2>
      <p>
        TalkFlow는 회화의 한 획을 바꾸고 싶은 생각만 해도 가슴 뛰는 목표가 있는
        조직입니다. 어렵고, 불편하고, 멀게 느껴지는 회화 공부가 아닌 누구에게나
        쉽고 효율적인 회화를 만드는 것입니다.{" "}
      </p>
      <p>- 토스 소개 멘트 따왔어요.</p>
    </Wrapper>
  );
};
export default CS;
