import React, { useRef } from "react";
import Lottie from "lottie-web";

const LottieAnimation = ({
  animationData,
  loop,
  autoplay,
  speed,
  isPaused,
  isStopped,
  ...restProps
}) => {
  // Lottie 컴포넌트의 ref를 만듭니다.
  const animationRef = useRef(null);

  // 기록 초기화 함수입니다.
  const resetAnimation = () => {
    // ref가 null이면 함수를 종료합니다.
    if (animationRef.current === null) return;

    // Lottie 애니메이션의 상태를 가져와서 멈춥니다.
    const animationState = animationRef.current.getState();
    animationState.isStopped = true;
    animationState.currentFrame = 0;

    // Lottie 애니메이션의 상태를 다시 설정합니다.
    animationRef.current.setState(animationState);
  };

  return (
    <Lottie
      ref={animationRef}
      animationData={animationData}
      loop={loop}
      autoplay={autoplay}
      speed={speed}
      isPaused={isPaused}
      isStopped={isStopped}
      {...restProps}
    />
  );
};

export default LottieAnimation;
