import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Loading from "components/atoms/Loading";
import axios from "axios";
import KaKaoLogin from "components/m/KaKaoLogin";
import { useNavigate } from "react-router-dom";

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
  ${({ theme }) => theme.layout.flexCenter};
  align-items: center;
  //background-color: orange;

  & section {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  //버튼 디자인
  & button {
    border: 1px solid black;
    padding: 2rem;
    border-radius: 0.8rem;
  }
`;
const LoginForm = ({
  email,
  password,
  setEmail,
  setPassword,
  onChange,
  onSubmit,
  isLoading,
  loginData,
}) => {
  const navigate = useNavigate();
  useEffect(() => {
    if (loginData) {
      navigate("/index");
    }
  }, [loginData, navigate]);
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  // const [isLoading, setIsLoading] = useState(false);
  // const [loginData, setLoginData] = useState(null);

  //
  // const onChange = (setState, e) => {
  //   setState(e.target.value);
  // };

  // password 보여주기
  const onShow = () => {
    setShowPassword(!showPassword);
  };
  //
  // const data = {
  //   email: email,
  //   password: password,
  // };
  // // msg :"success";
  // // userid " ";

  // 부모컴포넌트에서  함수값을 Loginform 으로 보내줘야함
  // 로그인 버튼
  // const onSubmit = async (e) => {
  //   // 로딩 ON
  //   setIsLoading(true);
  //   e.preventDefault();
  //   // 로그인 요청
  //   const res = await axios.post("http://localhost:8000/post-login", data);
  //   if (res.data === "wrong") {
  //     setLoginData(false);
  //   }
  //   if (res.data === "success") {
  //     setLoginData(true);
  //   }
  //   // 로딩 off
  //   setIsLoading(false);
  // };

  return (
    <Container>
      <Wrapper>
        <section>
          <label htmlFor="userEmail">
            enter your email. <br />
            <input
              type="text"
              name="userEmail"
              id="userEmail"
              value={email}
              onChange={(e) => onChange(setEmail, e)}
            />
          </label>
          <br />
          <label htmlFor="pw">
            enter your Password <br />
            <input
              type={showPassword ? "text" : "password"}
              name="pw"
              id="pw"
              value={password}
              onChange={(e) => onChange(setPassword, e)}
            />
            <button onClick={onShow}>눈 아이콘</button>
          </label>
          <br />
          {loginData === false && (
            <p>아이디 혹은 비밀번호가 일치하지 않아요.</p>
          )}
          <button onClick={onSubmit}>로그인하기</button>
          <KaKaoLogin />
        </section>
      </Wrapper>
    </Container>
  );
};

export default LoginForm;
