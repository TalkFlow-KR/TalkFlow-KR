import React from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import RegisterForm from "./RegisterForm";
// import LoginForm from "./LoginForm";
const Wrapper = styled.main`
  ${ ({ theme }) => theme.color.background };
  ${ ({ theme }) => theme.layout.flexCenter };
  width: 100vw;
  height: 100vh;

  & > div {
    width: 500px;
    height: 500px;
    background-color: tan;
    border-radius: 2.2rem;
  }
`;

const LOGIN_DATA = {};
const JOIN_DATA = {
  email:{
    label:"what's your email",
    type:"text",
    placeholder:"type your email",
    onChange(e) {
      setValue(e.target.value);
    },
  },
  password:{},
  name:{},
  gender:{},
  phone:{},

};
const AuthForm = () => {
  const { endpoint } = useParams();
  return (
    <Wrapper>
      {/*  Loginform*/ }
      {/*{endpoint ==='login' && <LoginForm data={LOGIN_DATA}/>}*/ }
      {/*  Registerform*/ }
      {/*{endpoint ==='register' && <RegisterForm data={JOIN_DATA}/>}*/ }
      <RegisterForm data={ JOIN_DATA } />
    </Wrapper>
  );
};

export default AuthForm;
