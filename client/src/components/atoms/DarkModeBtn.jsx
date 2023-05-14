import React, { useEffect, useState } from "react";
import Lottie from "components/atoms/LottieComponent";
import animationData from "assets/darkmode.json";
import styled from "styled-components";

const Wrapper = styled.article`
  display: flex;
  justify-content: center;
  text-align: center;
  position: relative;
  border: 0.3em solid white;
  width: 6rem;
  height: 6rem;
  border-radius: 50%;
  background: #f7f0df;
  overflow: hidden;
`;
const LottieBox = styled.div`
  cursor: pointer;
  transform: scale(2.4);
  overflow: hidden;
`;
// direction = true //역방향
// direction = false //정방향
const DarkModeBtn = ({ mode }) => {
  const [isHover, setIsHover] = useState(false);
  const [initialSegment, setInitialSegment] = useState(0);

  useEffect(() => {
    if (mode === "dark") {
      setInitialSegment(134);
    } else {
      setInitialSegment(0);
    }
  }, [mode]);

  return (
    <Wrapper>
      <LottieBox>
        <Lottie
          onMouseEnter={() => setIsHover(true)}
          onMouseLeave={() => setIsHover(false)}
          animationData={animationData}
          direction={mode === "light" ? true : false}
          isPaused={!isHover}
          loop={false}
          speed={10}
          initialSegment={initialSegment}
        />
      </LottieBox>
    </Wrapper>
  );
};

export default DarkModeBtn;
