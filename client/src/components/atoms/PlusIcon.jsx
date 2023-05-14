import React, { useState } from "react";
import animationData from "assets/plus.json";
import styled from "styled-components";
import Lottie from "./LottieComponent";

const Wrapper = styled.main`
  width: 2.5rem;
  height: 2.5rem;
  /* position: absolute; */
  /* top: 50%; */
  /* left: 50%; */
  /* transform: translate(-50%, -50%); */
  /* z-index: 1000; */
`;

// const style = {
//   height: "300px",
//   width: "300px",
//   backgroundColor: "red",
// };
const PlusIcon = () => {
  // const [speed, setSpeed] = useState(0.5);
  const [isPaused, setIsPaused] = useState(false);
  const [isStopped, setIsStopped] = useState(false);

  return (
    <>
      {/* <Overlay> */}
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
      {/* </Overlay> */}
    </>
  );
};

export default PlusIcon;
