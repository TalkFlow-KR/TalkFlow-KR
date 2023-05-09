import React, { useState } from "react";
import styled from "styled-components";
import InputWithLabels from "../../molecules/InputWithLabels";

const Wrapper = styled.div`
  ${ ({ theme }) => theme.layout.flexCenter };
  align-items: center;
`;
const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  transition: all 0.4s;

  & fieldset {
    //margin: 0 20rem;
    //transform: translateX(770%);
  }
`;

const StyledFieldSet = styled.fieldset`
  border: 0;
  margin: 0;
  padding: 0;
  word-break: keep-all;
`;
const RegisterForm = () => {
  const [ isValid, setIsValid ] = useState(false);
  const [ position, setPosition ] = useState(1);
  // email state
  const [ emailValue, setEmailValue ] = useState("");
  // password state
  const [ passwordValue, setPasswordValue ] = useState("");
  const [ showPassword, setShowPassword ] = useState(false);
  // userName state
  const [ userNameValue, setUserNameValue ] = useState("");
  // gender state
  const [ genderValue, setGenderValue ] = useState("male");
  // phone state
  const [ phoneValue, setPhoneValue ] = useState("");

  const JOIN_DATA = {
    email:{
      id:"email", name:"email", label:"what's your email?", type:"text", placeholder:"type your email.",
    }, password:{
      id:"password",
      name:"password",
      label:"Enter the password to use.",
      type:!showPassword ? "password" : "text",
      placeholder:"******",
    }, userName:{
      id:"name", name:"name", label:"What's your name tho ?", type:"text", placeholder:"James",
    }, gender:{
      label:"are you male? or female?", male:{
        id:"male", name:"gender", label:"Male", type:"radio", value:"male",
      }, female:{
        id:"female", name:"gender", label:"Female", type:"radio", value:"female",
      },
    }, phone:{
      id:"phone", name:"phone", label:"enter your phone number", type:"text", placeholder:"010-1234-5678",
    },
  };
  const { email, password, userName, gender, phone } = JOIN_DATA;
  const onClick = (e) => {
    e.preventDefault();
    setPosition(position - 80);
  };

  const emailRageX = /^[a-zA-Z0-9+-\_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;

  const onChange = (e, setState, valid) => {
    const value = e.target.value;
    if (valid) {
      setIsValid(valid.test(value));

    }
    setState(value);
  };
  const onSubmit = () => {
    console.log(genderValue, phoneValue, userNameValue, passwordValue, emailValue);
    return;
  };
  const onShow = () => {
    setShowPassword(!showPassword);
  };
  return (<>
    <Wrapper>
      <StyledForm action="" style={ { transform:`translateX(${ position }rem)` } }>
        <StyledFieldSet>
          <InputWithLabels
            data={ email }
            onChange={ (e) => onChange(e, setEmailValue, emailRageX) }
            value={ emailValue }
            required={ true }
            onKeyPress={ (e) => {
              if (e.key === " ") e.preventDefault();
            } }
          />
          { (isValid) ? (<p>Good.</p>) : (<p>please enter a valid email. Bad</p>) }
          <button type="button" onClick={ onClick } disabled={ !isValid }>
            NEXT
          </button>
        </StyledFieldSet>
        <StyledFieldSet>
          <InputWithLabels
            data={ password }
            onChange={ (e) => onChange(e, setPasswordValue) }
            value={ passwordValue }
            required={ true }
            onKeyPress={ (e) => {
              if (e.key === " ") e.preventDefault();
            } }
          />
          { !(passwordValue.length >= 8 || (passwordValue.length === 0)) ? (<p>Good</p>) : (<p>Bad</p>) }
          <button type="button" onClick={ onShow }>
            show Password
          </button>
          <button type="button" onClick={ onClick }>
            NEXT
          </button>
        </StyledFieldSet>
        <StyledFieldSet>
          <InputWithLabels
            data={ userName }
            onChange={ (e) => onChange(e, setUserNameValue) }
            value={ userNameValue }
          />
          <button type="button" onClick={ onClick }>
            NEXT
          </button>
        </StyledFieldSet>
        <StyledFieldSet>
          <InputWithLabels
            data={ gender }
            onChange={ (e) => onChange(e, setGenderValue) }
            value={ genderValue }
          />
          <button type="button" onClick={ onClick }>
            NEXT
          </button>
        </StyledFieldSet>
        <StyledFieldSet>
          <InputWithLabels
            data={ phone }
            onChange={ (e) => onChange(e, setPhoneValue) }
            value={ phoneValue }
          />
          <button type="button" onClick={ onClick }>
            NEXT
          </button>
        </StyledFieldSet>
        {/*submit 버튼*/ }
        <button type="button" onClick={ onSubmit }>
          register
        </button>
      </StyledForm>
    </Wrapper>
  </>);
};

export default RegisterForm;
