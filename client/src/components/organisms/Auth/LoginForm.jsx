import React from "react";
import styled from "styled-components";
import InputWithLabels from "../../molecules/InputWithLabels";
import Button from "../../atoms/Button";

const Wrapper = styled.div`
  ${ ({ theme }) => theme.layout.flexCenter };
  align-items: center;

  & form {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  & button {
  }
`;

const LoginForm = () => {
  return (
    <>
      <Wrapper>
        <form action="">
          <label htmlFor="email"> enter your email. <br/>
            <input type="text" name="email" id="email" />
          </label>
          <br />
          <label htmlFor="pw">enter your Password <br/>
            <input type="password" name="pw" id="pw" />
          </label>
          <br/>
          <button>test</button>
        </form>
      </Wrapper>
    </>
  );
};

export default LoginForm;
