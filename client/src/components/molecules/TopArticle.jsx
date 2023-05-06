import React from "react";
import { Wrapper } from "styles/TopArticle.styled";
import styled from "styled-components";
import Button from "../atoms/Button";

const text = {
  btnText: "Start a new chat",
};
const TopArticle = () => {
  return (
    <>
      <Wrapper>
        <h2>Home</h2>
        <Button text={text.btnText} />
      </Wrapper>
    </>
  );
};

export default TopArticle;
