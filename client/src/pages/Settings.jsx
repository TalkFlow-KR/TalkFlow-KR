import React from "react";
// import { ChatContainer, ChatCover } from "../../styles/Chat.styled";
import styled from "styled-components";

const Title = styled.div`
  padding: 2rem;
`;
const ChatContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-color: ${ (props) => props.theme.color.boxBackground };
  border-radius: 2rem 2rem 0 0;
`;

const SettingArticle = styled.article`
  justify-content: center;
  align-items: center;
  display: flex;
  padding: 2rem;

  & p {
    margin-right: 2rem;
    border-radius: .8rem;
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), #B7B7B7;
    width: 6rem;
    height: 4rem;
    text-align: center;
    align-self: center;
  }

  & button {
    margin: 2rem;
    width: 9rem;
    height: 4rem;
    border-radius: 2rem;
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
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  /* padding-left: 0 1.6rem; */
  padding: 0 1.6rem 0 1.6rem;
  margin: 0;
  overflow-y: scroll;
  /* box-shadow: 2px 2px 5px -2px inset;; */
  background-color: ${ (props) => props.theme.color.chatBackground };
  border-radius: 2rem 2rem 0 0;


  & article {
    border-radius: 1.2rem;
    width: 100%;
    height: 7.2rem;
    background: linear-gradient(180deg, rgba(217, 217, 217, 0.09) 0%, rgba(217, 217, 217, 0) 100%);
    border: .1rem #fff2 solid;
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
    top: 1px;
    color: white;
    font-size: 1.6rem;
    padding: 3rem;
    background-color: ${ (props) => props.theme.color.chatBackground };

  }

  & img {
    border-radius: 50%;
  }

`;
const ChatCover = styled.div`
  height: 100vh;
  flex-direction: column;
  justify-content: flex-start;
  padding-left: 1.6rem;
  box-shadow: 0 -0.7rem 1rem rgba(0, 0, 0, 0.25);
  background-color: ${ (props) => props.theme.color.boxBackground };
  color: #fff;
  border-radius: 2rem 2rem 0 0;
`;

const Settings = () => {
  return (<ChatContainer>
    {/*flex column*/ }
    {/*50vh*/ }
    <ChatCover>
      <Title>
        <h2>Create a new chat </h2>
      </Title>
      <div>
        <SettingArticle>
          <p>상대</p>
          <button>테스트1</button>
          <button>테스트2</button>
          <button>테스트3</button>
          <button>테스트4</button>
        </SettingArticle>
        <SettingArticle>
          <p>상대</p>
          <button>테스트1</button>
          <button>테스트2</button>
          <button>테스트3</button>
          <button>테스트4</button>
        </SettingArticle>
        <SettingArticle>
          <p>상대</p>
          <button>테스트1</button>
          <button>테스트2</button>
          <button>테스트3</button>
          <button>테스트4</button>
        </SettingArticle>

      </div>
    </ChatCover>
    {/*flex center*/ }
    {/**/ }
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
  </ChatContainer>);
};
export default Settings;
