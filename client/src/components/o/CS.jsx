// ChatSettingComponent.jsx
import axios from "axios";
import React, { useState } from "react";
import styled from "styled-components";
import SettingItem from "../m/SettingItem";

const Wrapper = styled.section`
  width: 25.7rem;
  height: 50vh;
  background-color: ${({ theme }) => theme.color.bg200};
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
`;

const Btn = styled.button`
  position: absolute;
  bottom: 0;
`;
const userid = "2787496442"; // 임시

const CS = ({ userId, data, onSubmit, setSettings }) => {
  console.log("userid!!!!!!: ", userId);
  console.log("CS onSubmit", onSubmit);
  // 옵션 아코디언
  const [isOpen, setIsOpen] = useState([false, false, false]);
  const [language, setLanguage] = useState("English");
  const [accent, setAccent] = useState("Health Trainer");

  const [situation, setSituation] = useState("at the Gym");

  const [payload, setPayload] = useState({
    language,
    accent,
    situation,
  });

  const onOpenClose = (number, option) => {
    const newIsOpen = isOpen.map((v, i) => (i === number ? !v : false));
    setIsOpen(newIsOpen);
    console.log(accent, situation, language);
  };

  const onSelectButton = (number, item) => {
    if (number === "0") {
      setLanguage(item);
    } else if (number === "1") {
      setAccent(item);
    } else if (number === "2") {
      setSituation(item);
    }
    console.log(language, accent, situation);
  };

  const onSubmitCS = () => {
    setPayload({
      language: language,
      accent: accent,
      situation: situation,
    });
    console.log("payload", payload);
    console.log("onsubmitcs", onSubmit);
    onSubmit(payload);

    axios
      .post(`${process.env.REACT_APP_DB_HOST}/room/make/${userid}`, {
        language: language,
        accent: accent,
        situation: situation,
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  // 1번 옵션(0)버튼의 하위 태그버튼들 클릭시 0번의 n번옵션이라고 알려준뒤 useState에 저장
  return (
    <Wrapper>
      <OptBtn onClick={() => onOpenClose(0)}>선택 1 | 언어</OptBtn>
      {isOpen[0] && <SettingItem onSelectButton={onSelectButton} option={0} />}

      <OptBtn onClick={() => onOpenClose(1)}>선택 2 | 테마</OptBtn>
      {isOpen[1] && <SettingItem onSelectButton={onSelectButton} option={1} />}
      <OptBtn onClick={() => onOpenClose(2)}>선택 3 | 어투</OptBtn>
      {isOpen[2] && <SettingItem onSelectButton={onSelectButton} option={2} />}
      <Btn onClick={onSubmitCS}>Start a chat</Btn>
    </Wrapper>
  );
};
export default CS;
