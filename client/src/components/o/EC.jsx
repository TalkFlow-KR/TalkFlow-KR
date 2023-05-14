// NotificationComponent.jsx
import React from "react";
import HC from "./HC";
import styled from "styled-components";
import CL from "./CL";
import CR from "./CR";
import CS from "./CS";
import ErrorAnimation from "components/atoms/ErrorAnimation";
import { Link } from "react-router-dom";

const Wrapper = styled.section`
  flex: 1 1 0;
  display: flex;
  flex-direction: column;
  //width: 107.2rem;
  //height: 70rem;
  //height: 100%;
  border-radius: 2rem;
  background-color: ${({ theme }) => theme.color.bg100};
  //justify-content: center;
  align-items: center;
  gap: 2rem;
  //margin: 2rem;
  overflow: hidden;
`;
const ContentsBox = styled.section`
  /* //width: 100%; */
  /* height: 100%; */
  display: flex;
  padding-bottom: 11.2rem;
`;

const GoMain = styled.button`
  /* display: flex; */
  width: 10rem;
  height: 5rem;
  background-color: transparent;
  font-size: ${({ theme }) => theme.fontSizes.boxTitle};
  color: ${({ theme }) => theme.color.text200};
  background-color: ${({ theme }) => theme.color.bg200};
  border-radius: 1rem;
  transform: translateY(-2rem);
  /* padding: 1rem; */

  &:active {
    border: 0.1rem solid;
    border-radius: 1rem;
    border-color: #ddd;
    background-color: ${({ theme }) => theme.color.bg300};
  }
`;
const EC = () => {
  return (
    <Wrapper>
      <ContentsBox>
        <ErrorAnimation />
      </ContentsBox>
      <Link to={"/main"}>
        <GoMain>메인으로 가기</GoMain>
      </Link>
    </Wrapper>
  );
};

export default EC;
