import React from "react";
import styled from "styled-components";

const Btn = styled.button`
  position: relative;
  width: 100%;
  margin: 0.4rem 0;
  color: ${({ theme }) => theme.color.highlight};
  text-align: left;
  background-color: transparent;
  border-bottom: 0.11rem solid ${({ theme }) => theme.color.primary300};
  //padding: 1.2rem;
  &:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 0.2rem;
    height: 0.2rem;
    background-color: ${({ theme }) => theme.color.primary200};
  }
  &:active {
    transition: 0.2s background-color ease-out;
  }
  &:active:after {
    background-color: ${({ theme }) => theme.color.reverse};
  }
`;

const SettingItem = ({ onSelectButton, data, option }) => {
  const onClick = (number) => {
    onSelectButton(number);
    console.log(number);
  };

  return (
    <div>
      {data.map((item) => (
        <Btn key={item} onClick={() => onSelectButton(option, item)}>
          {item}
        </Btn>
      ))}
    </div>
  );
};

export default SettingItem;
