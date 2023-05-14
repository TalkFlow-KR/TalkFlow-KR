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
    outline: 0.3rem solid red;
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
    outline: 0.3rem solid red;
  }
`;
const loginBox = styled.section`
  padding: 2rem;
  position: relative;
`;

const title = styled.h2`
  margin-bottom: 2rem;
`;
const register = styled.p`
  color: brown;
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
const Or = styled.h4`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  text-align: center;
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
  emailInput,
  pwInput,
  loginBox,
  title,
  register,
  pwBox,
  inputBox,
  showPasswordBtn,
  clearEmailValueBtn,
  emailBox,
  Or,
};

const LoginForm = ({ onChange, onSubmit, loginData, isUserActive }) => {
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
  useEffect(() => {
    setIsLoading(true);
    if (isUserActive) {
      navigate("/authredirect");
    } else {
      setIsLoading(false);
    }
  }, [isUserActive, navigate]);
  const onShow = () => {
    setShowPassword(!showPassword);
  };

  const onClick = () => {
    console.log("Login 폼에서 버튼 테스트");
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
                    name="userEmail"
                    id="userEmail"
                    placeholder="Email"
                    value={email}
                    onChange={handleOnChange}
                    onKeyDown={onKeyDown}
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
                          isStopped={!isHover}
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
                  backgroundColor: "#eee",
                  textAlign: "center",
                  width: "100%",
                  height: "3rem",
                }}>
                {password && <button onClick={onClick}>로그인하기</button>}
              </div>

              <Or>or</Or>
              <p style={{ textAlign: "center" }}>
                처음이신가요 ? <span>회원가입 하기</span>
              </p>
              <KaKaoLogin />
            </>
          )}
        </S.loginBox>
      </Wrapper>
    </Container>
  );
};

export default LoginForm;
