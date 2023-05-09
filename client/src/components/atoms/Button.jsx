import React from "react";
import { Btn } from "../../styles/Button.styled";
// import { Btn } from "../../styles/Button.styled";

const Button = (props) => {
  return <Btn>{props.text}</Btn>;
};

export default Button;
