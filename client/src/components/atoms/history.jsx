import React, { useState } from "react";
import animationData from "assets/history.json";
import styled from "styled-components";
import Lottie from "./LottieComponent";

const Wrapper = styled.main`
  width: 2.5rem;
  height: 2.5rem;
  /* color: ${({ theme }) => theme.color.text100}; */
  /* position: absolute; */
  /* top: 50%; */
  /* left: 50%; */
  /* transform: translate(-50%, -50%); */
  /* z-index: 1000; */
`;

const History = () => {
  // const [speed, setSpeed] = useState(0.5);
  const [isPaused, setIsPaused] = useState(false);
  const [isStopped, setIsStopped] = useState(false);

  return (
    <>
      <Wrapper>
        <Lottie
          animationData={animationData}
          // speed={speed}
          isPaused={isPaused}
          isStopped={isStopped}
        />
        {/* <button onClick={() => setSpeed(speed)}>double</button>  */}
        {/* <button onClick={() => setIsPaused(!isPaused)}>pause/play</button> */}
        {/* <button onClick={() => setIsStopped(!isStopped)}>stop/play</button> */}
      </Wrapper>
    </>
  );
};

export default History;
