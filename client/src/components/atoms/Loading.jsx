import React, { useState } from "react";
import Lottie from "lottie-react";
// import Lottie from "react-lottie";
import animationData from "assets/loading.json";
import styled from "styled-components";

const Wrapper = styled.main`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1000;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 100;
  background-color: #0008;
`;
const style = {
  height: 300,
  width: 300,
};

const options = {
  loop: true,
  autoplay: true,
  animationData: { animationData },
};

const Loading = () => {
  const [isStopped, setIsStopped] = useState(false);
  return (
    <>
      <Overlay>
        <Wrapper>
          <Lottie
            options={options}
            style={style}
            animationData={animationData}
            isStopped={isStopped}
          />
        </Wrapper>
      </Overlay>
    </>
  );
};

export default Loading;
