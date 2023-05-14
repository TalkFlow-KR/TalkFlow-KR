import React from "react";
import animationData from "assets/history.json";
import styled from "styled-components";
import Lottie from "./LottieComponent";
import { useEffect,useState} from "react";
import axios from "axios";

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
  const userid = '32b16654-e983-47ef-a382-eb3bf1f9b789'
  const [isPaused, setIsPaused] = useState(false);
  const [isStopped, setIsStopped] = useState(false);
  const [roomNumber, setRoomNumber] = useState()

  useEffect(()=>{
    axios.get(`http://localhost:8000/room/all/${userid}`)
    .then((res)=>{
      setRoomNumber(res.data)
      console.log('res: ',res.data) // 방번호 받아오기
    })
    .catch((err)=>{
      console.log(err)
    })
  },[])

  // 빼온 방번호 roomNumber에 담아놓았음

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
