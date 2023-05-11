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
      <Btn onClick={onClick}>옵션1</Btn>
      <Btn onClick={onClick}>옵션2</Btn>
      <Btn onClick={onClick}>옵션3</Btn>
      <Btn onClick={onClick}>옵션4</Btn>
    </div>
  );
};

export default SettingItem;
