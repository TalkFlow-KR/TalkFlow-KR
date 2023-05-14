//HeaderComponent.jsx
import React from "react";
import styled from "styled-components";
import DarkMode from "components/atoms/DarkMode";

const IndexHeader = styled.section`
  display: flex;
  width: 100vw;
  height: 5.6rem;
  height: ${({ theme }) => theme.layout.height.top};
  background-color: tan;
  /* background-color: transparent; */
  color: ${({ theme }) => theme.color.text200};
  border-radius: 1.2rem;
  padding: 1.2rem;
  margin: 2rem;
  font-size: 3.2rem;
  text-overflow: ellipsis;
  white-space: nowrap;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.div``;
const Btn = styled.div``;
const IH = () => {
  return (
    <>
      <IndexHeader>
        <Logo>LOGO</Logo>
        <Btn>비로그인</Btn>
      </IndexHeader>
    </>
  );
};

export default IH;
