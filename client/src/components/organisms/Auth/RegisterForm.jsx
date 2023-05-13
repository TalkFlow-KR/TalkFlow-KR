import React, { useEffect, useState } from "react";
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
  const [emailValue, setEmailValue] = useState("smurf@kakao.com");
  // 이메일 유효성
  const [isValidEmail, setIsValidEmail] = useState(false);
  // password state
  const [passwordValue, setPasswordValue] = useState("1234");
  const [showPassword, setShowPassword] = useState(false);
  // userName state
  const [userNameValue, setUserNameValue] = useState("smurf");
  // gender state
  const [genderValue, setGenderValue] = useState("male");
  // phone state
  const [phoneValue, setPhoneValue] = useState("0100000000");
  // 폰 유효성
  const [isValidPhone, setIsValidPhone] = useState(false);
  const [isDisable, setIsDisable] = useState(false);
  const [registerText, setRegisterText] = useState("가입하기");

  const JOIN_DATA = {
    emailText: {
      id: "email",
      name: "email",
      label: "what's your email?",
      type: "text",
      placeholder: "type your email.",
    },
    passwordText: {
      id: "password",
      name: "password",
      label: "Enter the password to use.",
      type: !showPassword ? "password" : "text",
      placeholder: "******",
    },
    userNameText: {
      id: "name",
      name: "name",
      label: "What's your name tho ?",
      type: "text",
      placeholder: "James",
    },
    genderText: {
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
    phoneText: {
      id: "phone",
      name: "phone",
      label: "enter your phone number",
      type: "text",
      placeholder: "010-1234-5678",
    },
  };
  const { emailText, passwordText, userNameText, genderText, phoneText } =
    JOIN_DATA;
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
    email: emailValue,
    name: userNameValue,
    password: passwordValue,
    gender: genderValue,
    telephone: phoneValue,
  };

  // 유효성 검사후 가입 버튼 활성화
  useEffect(() => {
    if (!(isValidEmail && isValidPhone && passwordValue.length < 9)) {
      setIsDisable(true);
    } else {
      setIsDisable(false);
    }
  }, [isValidEmail, isValidPhone, passwordValue]);

  // 가입하기 버튼 누르기
  const onSubmit = async () => {
    console.log(
      emailValue,
      passwordValue,
      phoneValue,
      genderValue,
      userNameValue,
      data
    );
    setIsLoading(true);
    const res = await axios.post("http://localhost:8000/post-signup", data);
    console.log(res.data);

    if (res.data === "res.data가 가입성공일 경우") {
      //   가입 성공에 대한 화면 출력 및 상태 변경
    } else {
      // 가입 실패일 경우 에러 출력
    }
    setIsLoading(false);
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
              data={emailText}
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
              data={passwordText}
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
              data={userNameText}
              onChange={(e) => onChange(e, setUserNameValue)}
              value={userNameValue}
            />
            <button type="button" onClick={onClick}>
              NEXT
            </button>
          </StyledFieldSet>
          <StyledFieldSet>
            <InputWithLabels
              data={genderText}
              onChange={(e) => onChange(e, setGenderValue)}
              value={genderValue}
            />
            <button type="button" onClick={onClick}>
              NEXT
            </button>
          </StyledFieldSet>
          <StyledFieldSet>
            <InputWithLabels
              data={phoneText}
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
          <button type="button" onClick={onSubmit} disabled={isDisable}>
            {registerText}
          </button>
        </StyledForm>
      </Wrapper>
    </>
  );
};

export default RegisterForm;
