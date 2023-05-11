import React, { useEffect, useState } from "react";
import styled from "styled-components";
import InputWithLabels from "../../molecules/InputWithLabels";
import Button from "../../atoms/Button";
import Loading from "../../atoms/Loading";
import axios from "axios";

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

  const onChange = (setState, e) => {
    setState(e.target.value);
  };
  const onShow = () => {
    setShowPassword(!showPassword);
  };

  const data = {
    userEmail: email,
    userPassword: password,
  };
  // 로그인 버튼
  const onSubmit = async (e) => {
    // 로딩 ON
    setIsLoading(true);
    e.preventDefault();
    // 로그인 요청
    const res = await axios.post("/post-login", data);
    console.log(res);
    console.log(email, password);
    // 로딩 OFf
    setIsLoading(false);
  };

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
          <button onClick={onSubmit}>test</button>
        </section>
      </Wrapper>
    </>
  );
};

export default LoginForm;
