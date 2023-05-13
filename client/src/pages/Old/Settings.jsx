import React, { useEffect, useState } from "react";
// import { ChatContainer, ChatCover } from "../../styles/Chat.styled";
import styled from "styled-components";
import axios from "axios";

const Title = styled.div`
  padding: 2rem;
`;
const ChatContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: g100vh;
  background-color: ${(props) => props.theme.color.boxBackground};
  border-radius: 2rem 2rem 0 0;
`;

const SettingArticle = styled.article`
  justify-content: center;
  align-items: center;
  display: flex;
  /* padding: 2rem; */

  & p {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 2rem;
    border-radius: 0.8rem;
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
      #b7b7b7;
    width: 6rem;
    height: 4rem;
  }

  & button {
    margin: 2rem;
    width: 9rem;
    height: 4rem;
    border-radius: 2rem;
    color: white;
  }
`;

const ImgBox = styled.div`
  border-radius: 50%;
  width: 4.8rem;
  height: 4.8rem;
  margin-right: 2.4rem;

  & img {
    width: 100%;
    height: 100%;
  }
`;
const Body = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  /* padding-left: 0 1.6rem; */
  padding: 0 1.6rem 0 1.6rem;
  margin: 0;
  overflow-y: scroll;
  /* box-shadow: 2px 2px 5px -2px inset;; */
  background-color: ${(props) => props.theme.color.chatBackground};
  border-radius: 2rem 2rem 0 0;

  &::-webkit-scrollbar {
    display: none;
  }

  & article {
    border-radius: 1.2rem;
    width: 100%;
    height: 7.2rem;
    background: linear-gradient(
      180deg,
      rgba(217, 217, 217, 0.09) 0%,
      rgba(217, 217, 217, 0) 100%
    );
    border: 0.1rem #fff2 solid;
    color: white;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 0 2rem;
    margin: 0.2rem 0;
    flex: 0 1 0;
  }

  & h2 {
    position: sticky;
    top: 0;
    left: 0;
    padding: 3rem;
    color: white;
    font-size: 1.6rem;
    background-color: ${(props) => props.theme.color.chatBackground};
  }

  & img {
    border-radius: 50%;
  }
`;
const ChatCover = styled.div`
  /* height: 100%; */
  flex-direction: column;
  justify-content: flex-start;
  padding-left: 1.6rem;
  box-shadow: 0 -0.7rem 1rem rgba(0, 0, 0, 0.25);
  background-color: ${(props) => props.theme.color.boxBackground};
  color: #fff;
  border-radius: 2rem 2rem 0 0;
`;
const Result = styled.p`
  display: flex;
  justify-content: center;
  font-size: 3.6rem;
`;
const ResultBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  & button {
    margin: 2rem;
    width: 9rem;
    height: 4rem;
    color: black;
    background-color: tan;
  }
`;
//
//
//
const Settings = () => {
  const [lang, setLang] = useState("");
  const [theme, setTheme] = useState("");
  const [partner, setPartner] = useState("");
  useEffect(() => {
    const res = axios.post("");
  }, []);
  const changeSettings = (setState, value, e) => {
    e.preventDefault();
    setState(value);
  };

  // 언어목록은 서버에서 받아올 예정
  const language = ["영어", "일본어", "중국어", "한국어"];
  const situation = ["비행기", "공원", "운동", "카페", "식당"];
  const voice = ["여성", "남성", "노인", "외국인"];
  return (
    <ChatContainer>
      {/*flex column*/}
      {/*50vh*/}
      <ChatCover>
        <Title>
          <h2>Create a new chat </h2>
        </Title>
        <div>
          <SettingArticle>
            <p>언어</p>
            {language.map((item, i) => (
              <button
                key={item + i}
                onClick={(e) => changeSettings(setLang, item, e)}
                style={{
                  backgroundColor: lang === item ? "#2BB0ED" : "#B7B7B7",
                }}>
                {item}
              </button>
            ))}

            {/*<button onClick={ (e) => changeSettings(setLang, "영어", e) }*/}
            {/*        style={ { backgroundColor:lang === "영어" ? "#2BB0ED" : "#B7B7B7" } }>영어*/}
            {/*</button>*/}
            {/*<button onClick={ (e) => changeSettings(setLang, "일본어", e) }*/}
            {/*        style={ { backgroundColor:lang === "일본어" ? "#2BB0ED" : "#B7B7B7" } }>일본어*/}
            {/*</button>*/}
            {/*<button onClick={ (e) => changeSettings(setLang, "중국어", e) }*/}
            {/*        style={ { backgroundColor:lang === "중국어" ? "#2BB0ED" : "#B7B7B7" } }>중국어*/}
            {/*</button>*/}
            {/*<button onClick={ (e) => changeSettings(setLang, "한국어", e) }*/}
            {/*        style={ { backgroundColor:lang === "한국어" ? "#2BB0ED" : "#B7B7B7" } }>한국어*/}
            {/*</button>*/}
          </SettingArticle>

          <SettingArticle>
            <p>테마</p>
            {situation.map((item, i) => (
              <button
                key={item + i}
                onClick={(e) => changeSettings(setTheme, item, e)}
                style={{
                  backgroundColor: theme === item ? "#2BB0ED" : "#B7B7B7",
                }}>
                {" "}
                {item}
              </button>
            ))}
          </SettingArticle>
          <SettingArticle>
            <p>억양</p>
            {voice.map((item, i) => (
              <button
                key={item + i}
                onClick={(e) => changeSettings(setPartner, item, e)}
                style={{
                  backgroundColor: partner === item ? "#2BB0ED" : "#B7B7B7",
                }}>
                {" "}
                {item}
              </button>
            ))}
          </SettingArticle>
          <ResultBox>
            <Result>
              {lang} / {theme} / {partner}
            </Result>
            {lang && theme && partner && <button>TEXT</button>}
          </ResultBox>
        </div>
      </ChatCover>
      {/*flex center*/}
      {/**/}
      <Body>
        <div>
          <h2>Recent Chat</h2>
          <article>
            <ImgBox>
              <img src="https://picsum.photos/200/300" alt="profile photo" />
            </ImgBox>
            <div>
              <p>Taylor</p>
              <span>#영어/#식당/#남성</span>

              <span>date</span>
            </div>
          </article>
          <article>
            <ImgBox>
              <img src="https://picsum.photos/200/300" alt="profile photo" />
            </ImgBox>
            <div>
              <p>Taylor</p>
              <span>#영어/#식당/#남성</span>

              <span>date</span>
            </div>
          </article>
          <article>
            <ImgBox>
              <img src="https://picsum.photos/200/300" alt="profile photo" />
            </ImgBox>
            <div>
              <p>Taylor</p>
              <span>#영어/#식당/#남성</span>

              <span>date</span>
            </div>
          </article>
          <article>
            <ImgBox>
              <img src="https://picsum.photos/200/300" alt="profile photo" />
            </ImgBox>
            <div>
              <p>Taylor</p>
              <span>#영어/#식당/#남성</span>

              <span>date</span>
            </div>
          </article>
          <article>
            <ImgBox>
              <img src="https://picsum.photos/200/300" alt="profile photo" />
            </ImgBox>
            <div>
              <p>Taylor</p>
              <span>#영어/#식당/#남성</span>

              <span>date</span>
            </div>
          </article>
        </div>
      </Body>
      ;
    </ChatContainer>
  );
};
export default Settings;
