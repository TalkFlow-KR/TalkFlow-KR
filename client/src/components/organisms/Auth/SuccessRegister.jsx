import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  color: white;
`;

const SuccessRegister = (isSuc) => {
  return (
    <Wrapper>
      <h1>회원가입에 성공하였습니다.</h1>
      <div></div>
      <button>홈으로 돌아가기</button>
    </Wrapper>
  );
};

export default SuccessRegister;
