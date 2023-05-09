//First.jsx
import React from "react";
import MainArticle from "../molecules/MainArticle";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

// { ...props} 로 보내서 Article 마다 스타일 차별화 주기

//	flex: ${(props) => props.flex}; // props 가 있다면 적용
// 	border: ${(props) => (props.outline === 'none' ? 'none' : `0.7px solid ${props.outline}`)}; props 가없다면 기본값 적용
// 	background: ${(props) => (props.transparent ? 'transparent' : props.bgColor)};
// 	color: ${(props) => props.color};

const First = () => {
  return (
    <Wrapper>
      <MainArticle />
      <MainArticle />
    </Wrapper>
  );
};

export default First;
