import React, { useEffect, useState } from "react";
import styled from "styled-components";
import InputWIthLabels from "../../molecules/InputWIthLabels";
import Button from "../../atoms/Button";


const Wrapper = styled.div`
  ${ ({ theme }) => theme.layout.flexCenter };
  align-items: center;
`;
const StyledForm = styled.form`
  display: flex;
  flex-wrap: nowrap;
  transition: all 0.4s;
  

  & fieldset {
    margin: 0 20rem;
    //transform: translateX(770%);
  }
`;

const StyledFieldSet = styled.fieldset`
  border: 0;
  margin: 0;
  padding: 0;
  word-break: keep-all;
`;
const RegisterForm = ({data}) => {
  console.log(data);
  const [ position, setPosition ] = useState(1);

  const onClick = (e) => {
    console.log(position);
    e.preventDefault();
    setPosition(position - 2);
  };
  return (
    <>
      <Wrapper>
        <StyledForm action="" style={ { transform:`translateX(${position}%)` } }>
          <StyledFieldSet>
            <InputWIthLabels data={data}/>
            <button type="button" onClick={ onClick }>NEXT</button>
          </StyledFieldSet>
          <StyledFieldSet>
            <InputWIthLabels />
            <button type="button" onClick={ onClick }>NEXT</button>
          </StyledFieldSet>
          <StyledFieldSet>
            <InputWIthLabels />
            <button type="button" onClick={ onClick }>NEXT</button>
          </StyledFieldSet>
          <StyledFieldSet>
            <InputWIthLabels />
            <button type="button" onClick={ onClick }>NEXT</button>
          </StyledFieldSet>
          <StyledFieldSet>
            <InputWIthLabels />
            <button type="button" onClick={ onClick }>NEXT</button>
          </StyledFieldSet>
          {/*submit 버튼*/ }
          <button type="button" onClick={ onClick }>1231312</button>
        </StyledForm>
      </Wrapper>
    </>
  );
};

export default RegisterForm;
