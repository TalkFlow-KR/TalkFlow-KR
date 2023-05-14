import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import Loading from "components/atoms/Loading";
import KaKaoLogin from "components/m/KaKaoLogin";
import { useNavigate } from "react-router-dom";
import Lottie from "components/atoms/LottieComponent";
import animationData from "assets/1401-eye01.json";
import { RiCloseFill } from "react-icons/ri";
const Container = styled.main`
  flex: 1 1 0;
  //width: 140rem;
  //max-width: 144rem;
  //min-width: 36rem;
  //width: 100%;
  //height: 100%;
  //height: 70rem;
  //width: 80vw;
  height: 80vh;
  //height: 100%;
  //width: 100%;
  border-radius: 2rem;
  color: ${({ theme }) => theme.color.text100};
  background-color: ${({ theme }) => theme.color.bg200};
  margin: 2rem;
  padding: 2rem;
  display: flex;
  /* flex-direction: column; */
  justify-content: space-around;
  gap: 6rem;
  align-items: stretch;
`;
const Wrapper = styled.div`
  flex: 1 1 0;
  max-width: 40rem;
  ${({ theme }) => theme.layout.flexCenter};
  align-items: center;

  //background-color: orange;

  & section {
    width: 100%;
    display: flex;
    flex-direction: column;
    //background-color: tan;
    padding: 8rem;
    border-radius: 2rem;
    border: 1px solid #aaa;
    background-color: #fff;
    ${({ theme }) => theme.shadow};
  }

  //버튼 디자인
`;
const emailInput = styled.input`
  position: relative;
  z-index: 20;
  width: 100%;
  border: 0.1rem solid #777;
  border-radius: 0.8rem;
  padding: 1.2rem;
  margin: 1.2rem 0;
  box-sizing: border-box;
  &::placeholder {
    font-size: 1.4rem;
  }
  &:focus {
    border: 0.1rem solid transparent;
    outline: 0.3rem solid ${({ theme }) => theme.color.primary100};
  }
`;
const clearEmailValueBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 1.2rem;
  //background-color: transparent;
  background-color: #eee;
  border: 0.1rem solid #ddd;
  border-radius: 50%;
  z-index: 30;
  width: 2rem;
  height: 2rem;
`;
const pwInput = styled.input`
  width: 100%;
  border: 0.1rem solid #777;
  border-radius: 0.8rem;
  padding: 1.2rem;
  margin: 1.2rem 0;
  box-sizing: border-box;
  &::placeholder {
    font-size: 1.4rem;
  }
  &:focus {
    border: 0.1rem solid transparent;
    outline: 0.3rem solid ${({ theme }) => theme.color.primary100};
  }
`;
const loginBox = styled.section`
  padding: 2rem;
  position: relative;
`;

const title = styled.h2`
  margin-bottom: 2rem;
  color: ${({ theme }) => theme.color.text100};
`;
const register = styled.p`
  color: ${({ theme }) => theme.color.text200};
`;
const LoginBtn = styled.button`
  width: 100%;
  padding: 1.2rem 2rem;
  border-radius: 2rem;
  background-color: ${({ theme, isPassword }) =>
    isPassword === true ? theme.color.bg200 : theme.color.primary100};
`;
const emailBox = styled.div`
  width: 100%;
  position: absolute;
  display: flex;
  z-index: 20;
  justify-content: space-between;
  align-items: center;
`;
const pwBox = styled.div`
  width: 100%;
  transition: 0.3s all ease-in-out;
  position: absolute;
  display: flex;
  z-index: 10;
  justify-content: space-between;
  align-items: center;
`;

const inputBox = styled.div`
  position: relative;
  height: 13.5rem;
  //background-color: tomato;
`;
const showPasswordBtn = styled.button`
  position: absolute;
  right: 1.2rem;
  //background-color: transparent;
  background-color: #eee;
  border: 0.1rem solid #ddd;
  border-radius: 50%;
`;
const KaKaoBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  & button {
    padding: 1.2rem;
    border-radius: 50%;
    background-color: #f7e111;
  }
`;
const Or = styled.h4`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  text-align: center;
  margin: 1.2rem 0;
  &:before {
    display: inline-block;
    content: "";
    border-top: 1px solid black;
    width: 20%;
    margin-top: 0.4rem;
    margin-right: 0.5rem;
  }
  &:after {
    display: inline-block;
    content: "";
    border-top: 1px solid black;
    width: 20%;
    margin-top: 0.4rem;
    margin-left: 0.5rem;
  }
`;

const S = {
  register,
  emailInput,
  pwInput,
  loginBox,
  title,
  pwBox,
  inputBox,
  showPasswordBtn,
  clearEmailValueBtn,
  emailBox,
  Or,
};

const LoginForm = ({
  onChange,
  onSubmit,
  loginData,
  isUserActive,
  notify,
  setLoginData,
}) => {
  const navigate = useNavigate();
  const passwordRef = useRef(null);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showPwInput, setShowPwInput] = useState(false);
  const [isAnimateOn, setIsAnimateOn] = useState(false);
  const [top, setTop] = useState("2.4rem");
  const [isHover, setIsHover] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isToast, setIsToast] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    if (isUserActive) {
      navigate("/main");
    } else {
      setIsLoading(false);
    }
  }, [isUserActive, navigate]);
  const onShow = () => {
    setShowPassword(!showPassword);
  };
  const onRegister = () => {
    navigate("/register");
  };
  const onClick = () => {
    onSubmit(email, password);
  };
  const handleOnChange = (e) => {
    onChange(setEmail, e);
  };
  const onKeyDown = (e) => {
    if (e.key === "Enter") {
      if (email.length === 0) {
        return;
      }
      // console.log(top);
      setShowPwInput(true);
      if (passwordRef.current) {
        passwordRef.current.focus();
      }
      // setTop("30%");
      // console.log(top);
    }
  };
  const onClear = () => {
    setEmail("");
    setShowPwInput(false);
  };
  useEffect(() => {
    if (showPwInput) {
      setTop("5.4rem");
      if (passwordRef.current) {
        passwordRef.current.focus();
      }
    }
  }, [showPwInput]);

  useEffect(() => {
    if (loginData === false) {
      setIsToast(true);
      setLoginData(null);
      console.log("test", loginData);
    } else if (loginData === true) {
      setIsToast(true);
    }
  }, [loginData, setLoginData]);

  // 비밀번호가 일치하지않는 렌더링
  useEffect(() => {
    console.log("test1", isToast);
    if (isToast) {
      if (loginData === false) {
        notify("아이디 혹은 비밀번호가 일치하지 않아요.");
      } else if (loginData === true) {
        notify("로그인 성공");
      }
      setIsToast(false);
    }
    console.log("test2", isToast);
  }, [isToast, notify]);

  return (
    <Container>
      <Wrapper>
        <S.loginBox>
          <S.title>Login</S.title>
          {isLoading ? (
            <Loading />
          ) : (
            <>
              <S.inputBox>
                <S.emailBox>
                  <S.emailInput
                    autoFocus={true}
                    type="text"
                    name="hmUserEmail"
                    id="userEmail"
                    placeholder="Email"
                    value={email}
                    onChange={handleOnChange}
                    onKeyDown={onKeyDown}
                    autoComplete={false}
                  />
                  {email && (
                    <>
                      <S.clearEmailValueBtn onClick={onClear}>
                        <RiCloseFill />
                      </S.clearEmailValueBtn>
                    </>
                  )}
                </S.emailBox>
                {showPwInput ? (
                  <>
                    <S.pwBox style={{ top: top }}>
                      <S.pwInput
                        ref={passwordRef}
                        type={showPassword ? "text" : "password"}
                        name="pw"
                        id="pw"
                        value={password}
                        placeholder="Password"
                        onChange={(e) => onChange(setPassword, e)}
                      />
                      <S.showPasswordBtn onClick={onShow}>
                        <Lottie
                          onMouseEnter={() => setIsHover(true)}
                          onMouseLeave={() => setIsHover(false)}
                          animationData={animationData}
                          isPaused={!isHover}
                          style={{ width: "2rem", height: "2rem" }}
                          speed={0.8}
                        />
                      </S.showPasswordBtn>
                    </S.pwBox>
                  </>
                ) : null}
              </S.inputBox>
              <br />
              {loginData === false && (
                <S.register>아이디 혹은 비밀번호가 일치하지 않아요.</S.register>
              )}
              <div
                style={{
                  textAlign: "center",
                }}>
                {password && (
                  <LoginBtn onClick={onClick} isPassword={password}>
                    로그인하기
                  </LoginBtn>
                )}
              </div>

              <p style={{ textAlign: "center", margin: "1.6rem 0" }}>
                처음이신가요 ? <br />{" "}
                <span
                  onClick={onRegister}
                  style={{ cursor: "pointer", fontWeight: "900" }}>
                  회원가입 하기
                </span>
              </p>
              <KaKaoBox>
                <KaKaoLogin />
              </KaKaoBox>
            </>
          )}
        </S.loginBox>
      </Wrapper>
    </Container>
  );
};

export default LoginForm;
