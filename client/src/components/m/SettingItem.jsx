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

const SettingItem = ({ onClick }) => {
  return (
    <div>
      <Btn onClick={onClick}>영어</Btn>
      <Btn onClick={onClick}>중국어</Btn>
      <Btn onClick={onClick}>일본어</Btn>
      <Btn onClick={onClick}>한국어</Btn>
    </div>
  );
};

export default SettingItem;
