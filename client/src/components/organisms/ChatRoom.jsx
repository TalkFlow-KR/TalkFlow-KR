
import BarIcon from 'components/atoms/BarIcon';
import Button from 'components/atoms/Button';
import LogoIcon from 'components/atoms/LogoIcon';
import ChatComponent from 'components/molecules/ChatComponent';
import React, { useState,  useRef, useEffect  } from 'react';
import {ChatBubble, UserChatBubble ,AiChatBubble, Time,ChatContainer, Header, Body, MessageList, ChatCover, Footer, InputContainer, Input, SendButton} from '../../styles/Chat.styled';
// import styled from 'styled-components';

const ChatRoom = () => {
const [inputValue, setInputValue] = useState('')
const [messageList, setMessageList] = useState([]);
const [message, setMessage] = useState('');
const [isAiBubble, setIsAiBubble] = useState(false);
const messagesEndRef = useRef(null);

// scrollIntoView : 가장 최근 메세지에 포커스
useEffect(() => {
    messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
  }, [messageList]);


  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      // Send the message
      console.log('Sending message:', inputValue);
      if(inputValue.trim()){
        const newMessage = {
          id: Date.now(),
          text: inputValue,
          isAiBubble: false,
          time: new Date().toLocaleTimeString(),
        }
        setMessageList([...messageList, newMessage]);
        setInputValue('');
        setMessage('');
        setIsAiBubble(true);
        // setMessage(event.target.value);
      }
    }
  };

const handleInputChange = (e) => {
    setInputValue(e.target.value);
    setMessage(e.target.value);
  };

const handleSendClick = () => {
  // if(inputValue.trim() !== ''){
    if(inputValue.trim()){
      const newMessage = {
        id: Date.now(),
        text: inputValue,
        isAiBubble:false,
        time: new Date().toLocaleTimeString(),
    }
    setMessageList([...messageList, newMessage]);
    setInputValue('');
    setMessage('');
    setIsAiBubble(true)
  };
  };


    return (
      <ChatContainer>
        <Header>
            <BarIcon/>
            <LogoIcon/>
            <Button text={"가입"}/>
        </Header>
        <ChatCover>
            <ChatComponent/>
        </ChatCover>
        <Body>
        {messageList.map((message) => (
          <ChatBubble key={message.id} isAiBubble={message.isAiBubble}>{message.text}</ChatBubble>
          ))}
          {/* <Time key={message.id}>{message.time}</Time> */}
           <div ref={messagesEndRef} />
        </Body>
        <Footer>
          <InputContainer>
            <Input 
            type="text" 
            value={inputValue} 
            onChange={handleInputChange}  
            onKeyDown={handleKeyDown} 
            placeholder="메시지를 입력하세요." />
          </InputContainer>
          <SendButton onClick={handleSendClick}>
          <LogoIcon/>
          </SendButton>
        </Footer>
      </ChatContainer>
    );
  };
export default ChatRoom;
