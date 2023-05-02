import React from 'react';

const Input = (props) => {
  return (
        <input type={props.password || 'text'} value={props.value ||''} placeholder={props.placeholder}/>
  );
};

export default Input;
