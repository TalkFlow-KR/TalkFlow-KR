import React, { useState } from "react";
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
  height:300,
  width:300,
};

const options = {
  loop:true,
  autoplay:true,
  animationData:{ animationData },

};

const Loading = () => {
  const [isStopped,setIsStopped] = useState(false);
  return (
    <Wrapper>
      <Lottie options={ options } style={ style }  animationData={animationData}/>
    </Wrapper>
  );
};

export default Loading;
