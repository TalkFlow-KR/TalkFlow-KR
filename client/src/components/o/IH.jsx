//HeaderComponent.jsx
import React from "react";
import styled from "styled-components";
import DarkMode from "components/atoms/DarkMode";

const Container = styled.section`
  display: flex;
  /* flex: 1 1 0; */
  //min-width: 103.2rem;
  //max-width: 32rem;
  height: 5.6rem;
  height: ${({ theme }) => theme.layout.height.top};
  /* background-color: ${({ theme }) => theme.color.bg200}; */
  background-color: tan;
  /* background-color: transparent; */

  border-radius: 1.2rem;
  padding: 1.2rem;
  margin: 2rem;
  font-size: 3.2rem;
  //flex: 0 1 0;
  //overflow-y: hidden;
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
      <Container>
        <Logo>LOGO</Logo>
        <DarkMode></DarkMode>
        <Btn>비로그인</Btn>
      </Container>
    </>
  );
};

export default IH;
