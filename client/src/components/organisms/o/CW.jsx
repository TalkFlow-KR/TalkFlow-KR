//CW
// New Chat center flex 요소 Wrapper
import React, { useState } from "react";
import styled from "styled-components";
import CR from "./CR";
import CS from "./CS";
import HrC from "./HrC";

const Wrapper = styled.section`
  padding: 2rem;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;

  @media (max-width: 720px) {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
  }
`;

const CW = ({ userId, data, onSubmit, setSettings }) => {
  const [isCreated, setIsCreated] = useState(true);
  const [roomData, setRoomData] = useState(null);
  console.log("CW onSubmit", onSubmit);
  const getRes = (data) => {
    console.log(data);
    setRoomData(data);
  };
  const Box = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    text-align: center;
    font-size: 4.2rem;
    background-color: ${({ theme }) => theme.color.bg100}
      ${({ theme }) => theme.shadow};
    border-radius: 2rem;
  `;
  return (
    <Wrapper>
      <CS
        userId={userId}
        data={data}
        onSubmit={onSubmit}
        setSettings={setSettings}
        isCreated={isCreated}
        getRes={getRes}
      />

      <Box>
        {roomData ? (
          <h1>대화하기전, 회화 테마를 선택 해주세요.</h1>
        ) : (
          <HrC roomData={roomData} data={data} />
        )}
      </Box>
    </Wrapper>
  );
};

export default CW;
