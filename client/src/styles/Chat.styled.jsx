import styled from "styled-components";
import { Btn } from "./Button.styled";
import ChatComponent from "components/molecules/ChatComponent";

export const ChatContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-direction: column;
  /* justify-content: space-between; */
  /* height: 80rem;
 */
  height: 100vh;
  background-color: #fff;
  border-radius: 2rem 2rem 0 0;
`;

export const ChatCover = styled.div`
  width: 100hw;
  height: ${(props) => props.theme.layout.height.top};
  flex-direction: column;
  justify-content: flex-start;
  padding-left: 1.6rem;
  box-shadow: 0 -0.7rem 1rem rgba(0, 0, 0, 0.25);
  background-color: ${(props) => props.theme.color.boxBackground};
  color: #fff;
  border-radius: 2rem 2rem 0 0;
`;

export const Header = styled.div`
  height: 10rem;
  display: flex;
  padding: 0 1.6rem;
  justify-content: space-between;
  background-color: #fff;
  color: ${(props) => props.theme.color.boxBackground};
  align-items: center;
`;

// export const ChatCover = styled.div`
//     height: 10rem;
//     background-color: greenyellow;
//     border-radius: 2rem 2rem 0 0;
//     box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;

// `

export const Body = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  /* padding-left: 0 1.6rem; */
  padding: 0 1.6rem 0 1.6rem;
  margin: 0;
  overflow-y: scroll;
  align-items: end;
  /* box-shadow: 2px 2px 5px -2px inset;; */
  background-color: ${(props) => props.theme.color.chatBackground};
`;

export const MessageList = styled.div`
  overflow-y: scroll;
  height: 100%;
  padding: 2rem;
`;

export const Footer = styled.div`
  height: 8rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.color.boxBackground};
  box-shadow: 0 -0.3rem 1rem rgba(0, 0, 0, 0.25);
`;

export const InputContainer = styled.div`
  display: flex;
  flex: 1 1 0;
  background-color: ${(props) => props.theme.color.boxBackground};
`;

export const Input = styled.input`
  flex: 1;
  margin: 2rem;
  padding: 1rem;
  border: none;
  border-radius: 0.5rem;
  font-size: 1.6rem;
  background-color: #fff;
`;

export const SendButton = styled(Btn)`
  width: 4rem;
  height: 4rem;
  margin-left: 1.6erm;
  border-radius: 5rem;
  font-size: 1.2rem;
  background-color: #5f5aa2;
  margin-right: 1.6rem;
  color: #ffffff;
  cursor: pointer;
  align-items: center;
`;

export const ChatBubble = styled.div`
  /* background-color: tan; */
  background-color: ${(props) => props.theme.color.chatBoxBackground};
  color: #fff;
  border-radius: 1.6rem;
  padding: 0.8rem 1.2rem;
  margin-top: 1.6rem;
  margin-left: 1.6rem;
  width: fit-content;
`;
export const Time = styled.div`
  color: #dbdbdb;
  margin-right: 1rem;
  font-size: 1rem;
`;

export const UserChatBubble = styled(ChatBubble)`
  background-color: #1abc9c;
  color: white;
  float: right;
`;

export const AiChatBubble = styled(ChatBubble)`
  background-color: #e74c3c;
  color: white;
  float: left;
`;

export const MainChatComponent = styled.section`
  width: 92.4rem;
  height: 33.6rem;
  background-color: tomato;
  margin-top: 2.4rem;
  border-radius: 2rem;
`;
