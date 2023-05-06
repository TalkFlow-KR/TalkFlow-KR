import React from "react";
import Button from "../atoms/Button";
import Title from "../atoms/Title";
import Input from "../atoms/Input";
// import styled from "styled-components";

const LoginArticle = () => {
  const LoginTexts = {
    title: "아토믹 디자인 재사용성 연습용 text",
    placeholder: "재사용성 연습용 placeholder",
    password: "password",
    text: "연습용 text",
    text2: "로그인",
  };
  const { title, placeholder, text, text2, password } = LoginTexts;
  return (
    <div>
      {/* <h3>atoms 의 컴포넌트들 재사용해서 만든 로그인 화면</h3> */}
      {/* <Title title={title} />
      <Input placeholder={placeholder} />
      <Input
        placeholder={placeholder}
        value={password.toUpperCase()}
        type={password}
      />
      <Button text={text} />
      <Button text={text2} /> */}
    </div>
  );
};

export default LoginArticle;
