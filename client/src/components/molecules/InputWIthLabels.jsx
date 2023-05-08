import React, { useState } from "react";

const InputWIthLabels = ({ placeholder, type, ...rest }) => {
  const [ value, setValue ] = useState();

  return (
    <>
      <label htmlFor=""> What's your ID ?
        <br />
        <input type={ type } placeholder={ placeholder } value={ value } { ...rest } />
      </label>
    </>
  );
};

export default InputWIthLabels;
