import React, { useState } from "react";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

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

  const onStart = () => {
    SpeechRecognition.startListening();
    setIsMicOn(true);
    setInputValue("");
  };
  const onStop = () => {
    SpeechRecognition.stopListening();
    setIsMicOn(false);
    setInputValue(transcript);
  };

  // input 을 클릭 햇을때 , 인풋안에 transcript 텍스트를 setinputValue 에 넣기
  const onEditing = () => {
    setText(transcript);
  };
  const onChange = (e) => {
    const newText = e.target.value;
    setInputValue(newText);
  };
  return (
    <div>
      <h2>{transcript}</h2>
      <h1>{inputValue}</h1>
      {!isMicOn ? (
        <button onClick={onStart}>Start</button>
      ) : (
        <button onClick={onStop}>Stop</button>
      )}
      <label htmlFor="">{transcript}</label>
      <input
        type="text"
        value={inputValue}
        disabled={isMicOn && false}
        onClick={onEditing}
        onChange={onChange}
      />
      <button>전송</button>
    </div>
  );
};

export default MicButton;
