import React, { useState } from "react";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import styled from "styled-components";

const TestBox = styled.div`
  padding: 2rem;
  position: relative;
`;
const Label = styled.label`
  background-color: white;
  width: 100%;
  position: absolute;
  top: 2.2rem;
  left: 2.2rem;
`;
const MicButton = () => {
  const {
    maxAlternatives,
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition();
  const [isMicOn, setIsMicOn] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [text, setText] = useState("");
  const [isShow, setIsShow] = useState(true);

  const onStart = () => {
    SpeechRecognition.startListening();
    setIsMicOn(true);
    setInputValue("");
    setIsShow(true);
  };
  const onStop = () => {
    SpeechRecognition.stopListening();
    setIsMicOn(false);
    setInputValue(transcript);
  };

  // input 을 클릭 햇을때 , 인풋안에 transcript 텍스트를 setinputValue 에 넣기
  const onEditing = () => {
    setIsShow(false);
    setText(transcript);
  };
  const onChange = (e) => {
    const newText = e.target.value;
    setInputValue(newText);
  };
  return (
    <>
      {/*<h2>{transcript}</h2>*/}
      {/*<h1>{inputValue}</h1>*/}
      {!isMicOn ? (
        <button onClick={onStart}>Start</button>
      ) : (
        <button onClick={onStop}>Stop</button>
      )}
      <TestBox>
        {isShow && <Label htmlFor="test">{transcript}</Label>}
        <input
          id="test"
          type="text"
          value={inputValue}
          disabled={isMicOn && false}
          onClick={onEditing}
          onChange={onChange}
        />
      </TestBox>
      <button>전송</button>
    </>
  );
};

export default MicButton;
