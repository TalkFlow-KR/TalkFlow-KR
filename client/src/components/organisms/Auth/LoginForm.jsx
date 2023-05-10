import React, { useState } from "react";
import styled from "styled-components";
import InputWithLabels from "../../molecules/InputWithLabels";
import Button from "../../atoms/Button";

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

  const onChange = (setState, e) => {
    setState(e.target.value);
  };
  const onShow = () => {
    setShowPassword(!showPassword);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    console.log(email, password);
  };
  return (
    <>
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
