import React from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import RegisterForm from "./RegisterForm";
import LoginForm from "./LoginForm";
// import LoginForm from "./LoginForm";
const Wrapper = styled.main`
  ${({ theme }) => theme.color.background};
  ${({ theme }) => theme.layout.flexCenter};
  width: 100vw;
  height: 100vh;

  & > div {
    margin: 2.4rem;
    max-width: 50rem;
    width: 36rem;
    height: 50rem;
    background-color: tan;
    border-radius: 2.2rem;
    flex: 1 1 0 ;
  }
`;

const LOGIN_DATA = {
  email: {
    id: "email",
    name: "email",
    label: "enter your email",
    type: "text",
    placeholder: "admin@admin.com",
  },
  password: {
    id: "password",
    name: "password",
    label: "enter your password",
    type: "password",
    placeholder: "password",
  },
};

const AuthForm = () => {
  const { endpoint } = useParams();
  return (
    <Wrapper>
      {/*  Loginform*/}
      {/*<LoginForm/>*/}
      {/*{endpoint ==='login' && <LoginForm data={LOGIN_DATA}/>}*/}
      {/*  Registerform*/}
      {/*{endpoint ==='register' && <RegisterForm data={JOIN_DATA}/>}*/}
      <RegisterForm />
    </Wrapper>
  );
};

export default AuthForm;
