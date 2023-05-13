import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Loading from "../../atoms/Loading";
import axios from "axios";
import KaKaoLogin from "../../m/KaKaoLogin";
import { useNavigate } from "react-router-dom";
import login from "../../../p/Login";

const Wrapper = styled.div`
  ${({ theme }) => theme.layout.flexCenter};
  align-items: center;

  & section {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  & button {
  }
`;
const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [loginData, setLoginData] = useState(null);

  const navigate = useNavigate();

  const onChange = (setState, e) => {
    setState(e.target.value);
  };
  const onShow = () => {
    setShowPassword(!showPassword);
  };

  const data = {
    email: email,
    password: password,
  };

  // 로그인 버튼
  const onSubmit = async (e) => {
    // 로딩 ON
    setIsLoading(true);
    e.preventDefault();
    // 로그인 요청
    const res = await axios.post("http://localhost:8000/post-login", data);
    console.log(res);
    console.log(res.data);
    console.log(email, password);
    if (res.data === "wrong") {
      setLoginData(false);
    }
    if (res.data === "success") {
      setLoginData(true);
    }
    // 로딩 off
    setIsLoading(false);
  };

  useEffect(() => {
    if (loginData) {
      navigate("/index");
    }
  }, [loginData, navigate]);
  return (
    <>
      {isLoading ? <Loading /> : "loadingState가 false라면,이게 뜸"};
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
            <button onClick={onShow}>openyoureyes</button>
          </label>
          <br />
          {loginData === false && (
            <p>아이디 혹은 비밀번호가 일치하지 않아요.</p>
          )}
          <button onClick={onSubmit}>로그인하기</button>
          <KaKaoLogin />
        </section>
      </Wrapper>
    </>
  );
};

export default LoginForm;
