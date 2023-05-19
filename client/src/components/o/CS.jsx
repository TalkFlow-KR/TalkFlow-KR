// ChatSettingComponent.jsx
import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import SettingItem from "../m/SettingItem";
import theme from "../../styles/themeProvider/theme";
import { useNavigate } from "react-router-dom";

const Wrapper = styled.section`
  width: 25.7rem;
  height: 100%;
  background-color: ${({ theme }) => theme.color.bg200};
  border-radius: 1.2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 2rem;
  margin: 2rem;
  overflow-y: hidden;
  overflow-x: hidden;
  position: relative;

  & button {
    padding: 0.8rem;
  }

  & h4 {
    display: inline;
    font-size: 1.5rem;
    font-weight: 900;
  }

  & h5 {
    display: inline;
    font-size: 1.6rem;
    font-weight: 300;
    color: ${({ theme }) => theme.color.highlight};
  }
`;

const OptBtn = styled.button`
  width: 100%;
  text-align: left;
  font-size: 2.2rem;
  font-weight: 700;
  //background-color: ${({ theme }) => theme.color.accent100};
  ${({ theme }) => theme.shadow};
  color: ${({ theme }) => theme.color.reverse};
  border-radius: 1.2rem;
  margin: 2rem;

  & span {
    color: ${({ theme }) => theme.color.primary200};
  }

  &:hover {
    color: #444;
  }
`;

const ResultBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
`;
const Btn = styled.button`
  border-radius: 0.8rem;
  margin: 2rem;
  padding: 2rem;
  //position: absolute;
  //bottom: 0;
  ${({ theme }) => theme.shadow};
  background-color: ${({ theme }) => theme.color.primary100};

  &:active {
    transition: 2s background-color ease-in-out;

    transform: scale(1.2);
  }
`;
const userid = "2787496442"; // 임시

const langData = ["영어", "한국어", "일본어"];
const themeData = ["헬스장", "공원"];
const accentData = ["여성", "군인", "래퍼"];
const CS = ({ userId, data, onSubmit, setSettings, getRes }) => {
  console.log("userid!!!!!!: ", userId);
  console.log("CS onSubmit", onSubmit);
  // 옵션 아코디언
  const [isOpen, setIsOpen] = useState([false, false, false]);
  //
  const navigate = useNavigate();
  const [language, setLanguage] = useState("English");
  const [situation, setSituation] = useState("at the Gym");
  const [accent, setAccent] = useState("Friend");
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
    console.log(item);

    if (number === "0") {
      setLanguage(item);
      if (item === "영어") {
        setLanguage("English");
      } else if (item === "한국어") {
        setLanguage("Korean");
      } else if (item === "일본어") {
        setLanguage("Japanese");
      }
    } else if (number === "1") {
      setAccent(item);
      if (item === "헬스장") {
        setLanguage("Gym");
      } else if (item === "공원") {
        setLanguage("Park");
      } else if (number === "2") {
        setSituation(item);
        if (item === "여자") {
          setLanguage("Woman");
        } else if (item === "군인") {
          setLanguage("Soldier");
        } else if (item === "외국인") {
          setLanguage("Foreigner");
        }
      }
    }
  };

  const onSubmitCS = () => {
    axios
      .post(`${process.env.REACT_APP_DB_HOST}/room/make/${userid}`, {
        language: language,
        accent: accent,
        situation: situation,
      })
      .then((res) => {
        console.log(res);
        getRes(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Wrapper>
      <h4>
        언어 : <h5>{language}</h5>
      </h4>
      <OptBtn onClick={() => onOpenClose(0)}>
        <span>&nbsp;| &nbsp; </span>
        언어
      </OptBtn>
      {isOpen[0] && (
        <SettingItem
          onSelectButton={onSelectButton}
          data={langData}
          option={0}
        />
      )}
      <h4>
        테마 : <h5>{situation}</h5>
      </h4>
      <OptBtn onClick={() => onOpenClose(1)}>
        <span>&nbsp;| &nbsp; </span>
        테마
      </OptBtn>
      {isOpen[1] && (
        <SettingItem
          onSelectButton={onSelectButton}
          data={themeData}
          option={1}
        />
      )}
      <h4>
        화법 : <h5>{accent}</h5>
      </h4>
      <OptBtn onClick={() => onOpenClose(2)}>
        <span>&nbsp;| &nbsp; </span>
        화법
      </OptBtn>
      {isOpen[2] && (
        <SettingItem
          onSelectButton={onSelectButton}
          data={accentData}
          option={2}
        />
      )}
      <Btn onClick={onSubmitCS}>채팅 생성하기</Btn>
    </Wrapper>
  );
};
export default CS;
