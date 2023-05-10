import React, { useState } from "react";
import styled from "styled-components";
import InputWithLabels from "../../molecules/InputWithLabels";
import axios from "axios";
import Loading from "../../atoms/Loading";

const Wrapper = styled.div`
  ${({ theme }) => theme.layout.flexCenter};
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
  const [isLoading, setIsLoading] = useState(false);
  const [isValid, setIsValid] = useState(false);
  const [position, setPosition] = useState(1);
  // email state
  const [emailValue, setEmailValue] = useState("");
  // 이메일 유효성
  const [isValidEmail, setIsValidEmail] = useState(false);
  // password state
  const [passwordValue, setPasswordValue] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  // userName state
  const [userNameValue, setUserNameValue] = useState("");
  // gender state
  const [genderValue, setGenderValue] = useState("male");
  // phone state
  const [phoneValue, setPhoneValue] = useState("");
  // 폰 유효성
  const [isValidPhone, setIsValidPhone] = useState(false);

  const JOIN_DATA = {
    email: {
      id: "email",
      name: "email",
      label: "what's your email?",
      type: "text",
      placeholder: "type your email.",
    },
    password: {
      id: "password",
      name: "password",
      label: "Enter the password to use.",
      type: !showPassword ? "password" : "text",
      placeholder: "******",
    },
    userName: {
      id: "name",
      name: "name",
      label: "What's your name tho ?",
      type: "text",
      placeholder: "James",
    },
    gender: {
      label: "are you male? or female?",
      male: {
        id: "male",
        name: "gender",
        label: "Male",
        type: "radio",
        value: "male",
      },
      female: {
        id: "female",
        name: "gender",
        label: "Female",
        type: "radio",
        value: "female",
      },
    },
    phone: {
      id: "phone",
      name: "phone",
      label: "enter your phone number",
      type: "text",
      placeholder: "010-1234-5678",
    },
  };
  const { email, password, userName, gender, phone } = JOIN_DATA;
  const onClick = (e) => {
    e.preventDefault();
    setPosition(position - 80);
  };

  const emailRageX = /^[a-zA-Z0-9+-\_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
  const phoneRageX = /^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$/;

  const onChange = (e, setState, valid, setValid) => {
    const value = e.target.value;
    if (valid) {
      setValid(valid.test(value));
    }
    setState(value);
  };
  const data = {
    name: emailValue,
    userName: userName,
    pw: passwordValue,
    gender: genderValue,
    phoneNumber: phoneValue,
  };
  const onSubmit = async () => {
    setIsLoading(true);
    const res = await axios.post("/post-signup", data);
    console.log(res.data);
    if (res.data === "res.data가 가입성공일 경우") {
      //   가입 성공에 대한 화면 출력 및 상태 변경
    } else {
      // 가입 실패일 경우 에러 출력
    }
    setIsLoading(false);
    console.log(
      emailValue,
      passwordValue,
      phoneValue,
      genderValue,
      userNameValue
    );
  };
  const onShow = () => {
    setShowPassword(!showPassword);
  };
  return (
    <>
      <Wrapper>
        {isLoading ? <Loading /> : "isLoading가 false라면,이게 뜸"};
        <StyledForm
          action=""
          style={{ transform: `translateX(${position}rem)` }}>
          <StyledFieldSet>
            <InputWithLabels
              data={email}
              onChange={(e) =>
                onChange(e, setEmailValue, emailRageX, setIsValidEmail)
              }
              value={emailValue}
              required={true}
              onKeyPress={(e) => {
                if (e.key === " ") e.preventDefault();
              }}
            />
            {isValidEmail ? (
              <p>Good.</p>
            ) : (
              <p>please enter a valid email. Bad</p>
            )}
            <button type="button" onClick={onClick} disabled={!isValidEmail}>
              NEXT
            </button>
          </StyledFieldSet>
          <StyledFieldSet>
            <InputWithLabels
              data={password}
              onChange={(e) => onChange(e, setPasswordValue)}
              value={passwordValue}
              required={true}
              onKeyPress={(e) => {
                if (e.key === " ") e.preventDefault();
              }}
            />
            {!(passwordValue.length >= 8 || passwordValue.length === 0) ? (
              <p>Good</p>
            ) : (
              <p>Bad (8글자까지)</p>
            )}
            <button type="button" onClick={onShow}>
              show Password
            </button>
            <button type="button" onClick={onClick}>
              NEXT
            </button>
          </StyledFieldSet>
          <StyledFieldSet>
            <InputWithLabels
              data={userName}
              onChange={(e) => onChange(e, setUserNameValue)}
              value={userNameValue}
            />
            <button type="button" onClick={onClick}>
              NEXT
            </button>
          </StyledFieldSet>
          <StyledFieldSet>
            <InputWithLabels
              data={gender}
              onChange={(e) => onChange(e, setGenderValue)}
              value={genderValue}
            />
            <button type="button" onClick={onClick}>
              NEXT
            </button>
          </StyledFieldSet>
          <StyledFieldSet>
            <InputWithLabels
              data={phone}
              onChange={(e) =>
                onChange(e, setPhoneValue, phoneRageX, setIsValidPhone)
              }
              value={phoneValue}
            />
            {isValidPhone ? (
              <p>Good.</p>
            ) : (
              <p>please enter a valid number. Bad</p>
            )}
            <button type="button" onClick={onClick}>
              NEXT
            </button>
          </StyledFieldSet>
          {/*submit 버튼*/}
          <button
            type="button"
            onClick={onSubmit}
            disabled={
              !(isValidEmail && isValidPhone && passwordValue.length < 9) &&
              true
            }>
            가입할게요 !
          </button>
        </StyledForm>
      </Wrapper>
    </>
  );
};

export default RegisterForm;
