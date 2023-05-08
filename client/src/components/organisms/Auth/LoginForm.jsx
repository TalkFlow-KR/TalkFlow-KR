import React from "react";
import styled from "styled-components";
import InputWIthLabels from "../../molecules/InputWIthLabels";
import Button from "../../atoms/Button";


const Wrapper = styled.div`
  ${ ({ theme }) => theme.layout.flexCenter };
  align-items: center;
`;

const LoginForm = () => {
  return (
    <>
      <Wrapper>
        <form action="">
          <InputWIthLabels />
          <InputWIthLabels />
          <Button/>
        </form>
      </Wrapper>
    </>
  );
};

export default LoginForm;
