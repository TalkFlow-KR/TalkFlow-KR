import React, { memo } from "react";
import styled from "styled-components";

const SLabel = styled.label`
  font-weight: 300;
`;
const BLabel = styled.label`
  font-weight: 900;
`;

const SInput = styled.input`
  width: 100%;
  position: relative;
  z-index: 20;
  border: 0.1rem solid #777;
  border-radius: 0.8rem;
  padding: 0.8rem;
  margin: 0 2rem;
  box-sizing: border-box;
  &::placeholder {
    font-size: 1.4rem;
  }
  &::placeholder {
    font-weight: 900;
  }
`;

const InputBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const RadioInput = styled.input``;
const InputWithLabels = memo(({ data, value, onChange, ...rest }) => {
  // console.log(data);
  // console.log(data.id);
  // console.log("prpps", props);
  // const { label, placeholder, type, value, onChange, ...rest } = data;
  if (data.male && data.female) {
    // console.log(data.male.value);
    return (
      <>
        <InputBox>
          <SLabel>
            {data.label}
            <br />
            <RadioInput
              type={data.male.type}
              id={data.male.id}
              name={data.male.name}
              value={data.male.value}
              onChange={onChange}
              checked={value === data.male.value}
              {...rest}
            />
            <BLabel htmlFor={data.male.id}>{data.male.label}</BLabel>
            <br />
            <RadioInput
              type={data.female.type}
              id={data.female.id}
              name={data.female.name}
              value={data.female.value}
              onChange={onChange}
              checked={value === data.female.value}
              {...rest}
            />
            <BLabel htmlFor={data.female.id}>{data.female.label}</BLabel>
          </SLabel>
        </InputBox>
      </>
    );
  }
  return (
    <>
      <InputBox>
        <SLabel htmlFor={data.id}>{data.label}</SLabel>
        <br />
        <SInput
          id={data.id}
          type={data.type}
          placeholder={data.placeholder}
          value={value}
          onChange={onChange}
          {...rest}
        />
      </InputBox>
    </>
  );
});

export default InputWithLabels;
