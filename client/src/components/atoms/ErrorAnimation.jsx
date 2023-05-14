import React, { useState } from "react";
import animationData from "assets/error.json";
import styled from "styled-components";
import Lottie from "./LottieComponent";

const Wrapper = styled.main`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1000;
`;

// const Overlay = styled.div`
//   position: absolute;
//   top: 0;
//   left: 0;
//   width: 100vw;
//   height: 100vh;
//   z-index: 100;
//   background-color: #0008;
// `;
const style = {
  height: "300px",
  width: "300px",
  backgroundColor: "red",
};
const ErrorAnimation = () => {
  return (
    <>
      {/* <Overlay> */}
      <Wrapper>
        <Lottie animationData={animationData} loop={false} />
        {/*<button onClick={() => setSpeed(speed)}>double</button>*/}
        {/* <button onClick={() => setIsPaused(!isPaused)}>pause/play</button>
          <button onClick={() => setIsStopped(!isStopped)}>stop/play</button> */}
      </Wrapper>
      {/* </Overlay> */}
    </>
  );
};

export default ErrorAnimation;
