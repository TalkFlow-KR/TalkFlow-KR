import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  margin: 0.8rem;
  width: 6rem;
  height: 6rem;
  & img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }
`;

const imageURL = "https://picsum.photos/seed/picsum/200/300";

const RoomIcon = () => {
  return (
    <>
      <Wrapper>
        <img src={imageURL}></img>
      </Wrapper>
    </>
  );
};

export default RoomIcon;
