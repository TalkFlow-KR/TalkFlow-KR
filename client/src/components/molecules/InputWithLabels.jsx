import React, { memo } from "react";
import styled from "styled-components";

const SInput = styled.input`
  width: 100%;
  position: relative;
  z-index: 20;
  border: 0.1rem solid #777;
  border-radius: 0.8rem;
  padding: 1.2rem;
  margin: 1.2rem 0;
  box-sizing: border-box;
  &::placeholder {
    font-size: 1.4rem;
  }
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
        <label>
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
          <label htmlFor={data.male.id}>{data.male.label}</label>
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
          <label htmlFor={data.female.id}>{data.female.label}</label>
        </label>
      </>
    );
  }
  return (
    <>
      <label htmlFor={data.id}>
        {data.label}
        <br />
        <SInput
          id={data.id}
          type={data.type}
          placeholder={data.placeholder}
          value={value}
          onChange={onChange}
          {...rest}
        />
      </label>
    </>
  );
});

export default InputWithLabels;
