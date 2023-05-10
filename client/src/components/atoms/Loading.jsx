import React from "react";
import Lottie from "lottie-react";
import animationData from "assets/loading.json";
import styled from "styled-components";

const Wrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const style = {
  height: 300,
  width: 300,
};

const Loading = () => {
  return (
    <Wrapper>
      <Lottie animationData={animationData} style={style} />
    </Wrapper>
  );
};

export default Loading;
