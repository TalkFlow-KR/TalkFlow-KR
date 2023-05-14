import React from "react";
import animationData from "assets/history.json";
import styled from "styled-components";
import Lottie from "./LottieComponent";
import { useEffect, useState } from "react";
import axios from "axios";

const Wrapper = styled.main`
  width: 2.5rem;
  height: 2.5rem;
`;

const History = () => {
  const [isPaused, setIsPaused] = useState(false);
  const [isStopped, setIsStopped] = useState(false);
  // const [speed, setSpeed] = useState(0.5);
  return (
    <>
      <Wrapper>
        <Lottie
          animationData={animationData}
          // speed={speed}
          isPaused={isPaused}
          isStopped={isStopped}
        />
      </Wrapper>
    </>
  );
};

export default History;
