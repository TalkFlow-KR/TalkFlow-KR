import React, { useState, useRef, useEffect } from "react";
import Lottie from "lottie-web";

// Lottie 컴포넌트 정의
const LottieComponent = ({
  animationData,
  hover,
  loop,
  autoplay,
  speed,
  isPaused,
  isStopped,
  direction,
  initialSegment,
  ...restProps
}) => {
  // Lottie 애니메이션 컨테이너에 대한 ref
  const animationContainer = useRef(null);
  const [animationInstance, setAnimationInstance] = useState(null);

  // Lottie 애니메이션 로드 및 초기화
  useEffect(() => {
    // Lottie 애니메이션 옵션 설정
    const animationOptions = {
      container: animationContainer.current,
      renderer: "svg",
      // hover: hover !== undefined ? hover : false,
      loop: loop !== undefined ? loop : true,
      autoplay: autoplay !== undefined ? autoplay : true,
      animationData: animationData,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice",
      },
    };

    // Lottie 애니메이션 로드
    const animation = Lottie.loadAnimation(animationOptions);
    // Lottie 애니메이션 상태 업데이트
    setAnimationInstance(animation);

    //  컴포넌트 unmount 시 애니메이션 제거
    return () => {
      animation.destroy();
    };
  }, [animationData, loop, autoplay]);

  // Lottie 인터랙션 관리
  useEffect(() => {
    if (animationInstance !== null) {
      // isPaused 프롭스에따라 일시정지 / 실행
      if (isPaused) {
        animationInstance.pause();
      } else {
        animationInstance.play();
      }

      if (isStopped) {
        animationInstance.stop();
      }

      if (speed !== undefined) {
        animationInstance.setSpeed(speed);
      }
      // direction 값에 따라 역방향 재생 여부 결정
      if (direction !== undefined) {
        if (direction === true) {
          // direction 값이 true 일 경우 역방향으로 재생
          animationInstance.setDirection(-1);
        } else {
          // direction 값이 false 일 경우 정방향으로 재생
          animationInstance.setDirection(1);
        }
      }
      if (initialSegment !== undefined) {
        animationInstance.playSegments(initialSegment, true);
      }
    }
  }, [
    isPaused,
    isStopped,
    speed,
    animationInstance,
    direction,
    initialSegment,
  ]);

  return <div ref={animationContainer} {...restProps} />;
};

export default LottieComponent;
