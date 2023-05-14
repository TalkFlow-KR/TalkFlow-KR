import React, { useState } from "react";
import animationData from "assets/loading.json";
import styled from "styled-components";
import Lottie from "./LottieComponent";

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
  background-color: #fff1;
`;

const Loading = () => {
  // const [isPaused, setIsPaused] = useState(false);
  // const [isStopped, setIsStopped] = useState(false);

  return (
    <>
      <Overlay>
        <Wrapper>
          <Lottie
            animationData={animationData}
            speed={0.4}
            // isPaused={isPaused}
            // isStopped={isStopped}
            style={{
              width: "10rem",
              height: "10rem",
            }}
          />
          {/*<button onClick={() => setSpeed(speed)}>double</button>*/}
          {/*<button onClick={() => setIsPaused(!isPaused)}>pause/play</button>*/}
          {/*<button onClick={() => setIsStopped(!isStopped)}>stop/play</button>*/}
        </Wrapper>
      </Overlay>
    </>
  );
};

export default Loading;
