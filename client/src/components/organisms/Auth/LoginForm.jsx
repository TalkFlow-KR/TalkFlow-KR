import React from "react";
import styled from "styled-components";
import InputWithLabels from "../../molecules/InputWithLabels";
import Button from "../../atoms/Button";

const Wrapper = styled.div`
  ${({ theme }) => theme.layout.flexCenter};
  align-items: center;
`;

const LoginForm = () => {
  return (
    <>
      <Wrapper>
        <form action="">
          <InputWithLabels />
          <InputWithLabels />
          <Button />
        </form>
      </Wrapper>
    </>
  );
};

export default LoginForm;
