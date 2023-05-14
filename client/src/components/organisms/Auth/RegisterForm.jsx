import React, { useEffect, useState } from "react";
import styled from "styled-components";
import InputWithLabels from "../../molecules/InputWithLabels";
import axios from "axios";
import Lottie from "components/atoms/LottieComponent";
import animationData from "assets/1401-eye01.json";
import Loading from "../../atoms/Loading";
import { AiFillHome } from "react-icons/ai";

import {
  AiOutlineCheck,
  AiOutlineQuestion,
  AiOutlineClose,
} from "react-icons/ai";

import { useNavigate } from "react-router-dom";

const Wrapper = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledForm = styled.div`
  text-align: center;
  transition: all 0.4s;
  background-color: ${({ theme }) => theme.color.bg100};
  border-radius: 0.8rem;
  padding: 1.6rem 4rem;
  border: 0.1rem solid white;
  ${({ theme }) => theme.shadow};

  & fieldset {
    flex: 1 1 0;
    display: flex;
    //justify-content: space-between;
    //margin: 0 20rem;
    padding: 0.8rem;
  }
`;
const StyledFieldSet = styled.fieldset`
  width: 100%;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  border: 0;
  margin: 0;
  padding: 0;
  word-break: keep-all;
`;
const NextBtn = styled.button`
  width: 80%;
  border-radius: 0.4rem;
  height: 4rem;
  background-color: ${({ isOkay, theme }) =>
    isOkay ? theme.color.primary100 : theme.color.bg300};
`;
const RegisterBtn = styled(NextBtn)`
  background-color: ${({ isDisable, theme }) =>
    !isDisable === true ? theme.color.primary100 : theme.color.bg200};
  margin: 2rem 0;
`;
const SmallBtn = styled.button`
  height: 100%;
  z-index: 30;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.8rem;
  margin: 1.2rem 0;
  border-radius: 1.2rem;
  background-color: #fff;
  ${({ theme }) => theme.shadow};
`;

const GoBack = styled.button`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.4rem;
  border-radius: 0.4rem;
  background-color: ${({ theme }) => theme.color.bg300};
  color: ${({ theme }) => theme.color.text200};
`;
const RegisterForm = ({ isFinish, setIsFinish, notify }) => {
  const [checkEmoji, setCheckEmoji] = useState(<AiOutlineQuestion />);
  const [isLoading, setIsLoading] = useState(false);
  const [isValid, setIsValid] = useState(-1);
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
  const [isDisable, setIsDisable] = useState(false);
  const [registerText, setRegisterText] = useState("가입하기");
  const [isHover, setIsHover] = useState(false);

  // 회원가입 성공/실패
  const [isSuccess, setIsSuccess] = useState("");
  //
  const navigate = useNavigate();

  const JOIN_DATA = {
    emailText: {
      id: "email",
      name: "email",
      label: "사용하실 이메일을 입력해주세요.",
      type: "text",
      placeholder: "Email",
    },
    passwordText: {
      id: "password",
      name: "password",
      label: "사용하실 비밀번호를 입력해주세요.",
      type: !showPassword ? "password" : "text",
      placeholder: "password",
    },
    userNameText: {
      id: "name",
      name: "name",
      label: "성함이 어떻게 되시죠?",
      type: "text",
      placeholder: "James",
    },
    genderText: {
      label: "성별을 알려주세요.",
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
      label: "모바일 번호가 필요해요.",
      type: "text",
      placeholder: "010-1234-5678",
    },
  };
  const { emailText, passwordText, userNameText, genderText, phoneText } =
    JOIN_DATA;

  const emailRageX = /^[a-zA-Z0-9+-\_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
  const phoneRageX = /^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$/;

  const onChange = (e, setState, valid, setValid) => {
    const value = e.target.value;
    if (valid) {
      setValid(valid.test(value));
    }
    setState(value);
    setCheckEmoji(<AiOutlineQuestion />);
  };

  // 유효성 검사후 가입 버튼 활성화
  useEffect(() => {
    if (!(isValidEmail && isValidPhone && passwordValue.length < 9)) {
      setIsDisable(true);
    } else {
      setIsDisable(false);
    }
  }, [isValidEmail, isValidPhone, passwordValue]);

  const data = {
    email: emailValue,
    name: userNameValue,
    password: passwordValue,
    gender: genderValue,
    telephone: phoneValue,
  };
  // 가입하기 버튼 누르기
  const onSubmit = async () => {
    console.log(data);
    setIsLoading(true);
    const res = await axios.post("http://localhost:8000/post-signup", data);
    console.log(res.data);
    setIsSuccess(res.data);
    if (res.data === "success") {
      // 가입 성공에 대한 화면 출력 및 상태 변경
      setIsFinish(true);
    } else {
      setIsSuccess(false);
      // 가입 실패일 경우 에러 출력
    }
    setIsLoading(false);
  };

  useEffect(() => {
    if (isSuccess === "success") {
      notify("회원가입 성공 ! 로그인 페이지로 이동합니다.");
      navigate("/successregister");
    } else if (isSuccess === "fail") {
      notify("입력하신 정보가 올바르지 않습니다.");
    }
    //
  }, [isSuccess, navigate, notify]);

  const onShow = () => {
    setShowPassword(!showPassword);
  };
  const onAuthEmail = async () => {
    console.log(emailValue);
    const res = await axios.post("http://localhost:8000/signup/checkemail", {
      email: emailValue,
    });
    console.log(res.data);
    // 중복이 아닐경우
    if (res.data) {
      setIsValid(1);
      setCheckEmoji(<AiOutlineCheck style={{ color: "#2ea043" }} />);
    } else {
      setIsValid(0);
      setCheckEmoji(<AiOutlineClose style={{ color: "#e23e32" }} />);
    }
  };

  const goIndex = () => {
    navigate("/");
  };
  return (
    <>
      <Wrapper>
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
            {!isValid ? <p>중복된 이메일 입니다. </p> : null}
            <SmallBtn type="NextBtn" onClick={onAuthEmail}>
              {checkEmoji}
            </SmallBtn>
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
            <SmallBtn type="NextBtn" onClick={onShow}>
              <Lottie
                onMouseEnter={() => setIsHover(true)}
                onMouseLeave={() => setIsHover(false)}
                animationData={animationData}
                isPaused={!isHover}
                style={{ width: "2rem", height: "2rem" }}
                speed={0.8}
              />
            </SmallBtn>
          </StyledFieldSet>

          <StyledFieldSet>
            <InputWithLabels
              data={userNameText}
              onChange={(e) => onChange(e, setUserNameValue)}
              value={userNameValue}
            />
          </StyledFieldSet>
          <StyledFieldSet>
            <InputWithLabels
              data={genderText}
              onChange={(e) => onChange(e, setGenderValue)}
              value={genderValue}
            />
          </StyledFieldSet>
          <StyledFieldSet>
            <InputWithLabels
              data={phoneText}
              onChange={(e) =>
                onChange(e, setPhoneValue, phoneRageX, setIsValidPhone)
              }
              value={phoneValue}
            />
          </StyledFieldSet>
          <RegisterBtn
            type="NextBtn"
            onClick={onSubmit}
            isDisable={isDisable}
            disabled={isDisable}>
            {registerText}
          </RegisterBtn>
          <GoBack onClick={goIndex}>
            <AiFillHome />
          </GoBack>
        </StyledForm>
      </Wrapper>
    </>
  );
};

export default RegisterForm;
