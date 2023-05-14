import React from "react";
import styled from "styled-components";

const input = styled.input`
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

const S = {
  input,
};
const RegisterItem = ({ data, onChange, value, state }) => {
  const { id, title, type, label, options } = data;

  const handleChange = (e, state) => {
    console.log(e.target.value);
    onChange(e.target.value, state);
  };

  return (
    <div>
      <label htmlFor={id}>{title}</label>
      {type === "text" || type === "password" ? (
        <S.input
          type={type}
          id={id}
          name={id}
          value={value}
          onChange={handleChange}
        />
      ) : (
        options.map((option) => (
          <div key={option.value}>
            <input
              type="radio"
              id={option.value}
              name={id}
              value={option.value}
              onChange={handleChange}
            />
            <label htmlFor={option.value}>{option.label}</label>
          </div>
        ))
      )}
    </div>
  );
};

export default RegisterItem;
