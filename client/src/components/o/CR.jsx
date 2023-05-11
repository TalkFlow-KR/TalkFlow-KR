//ChatRoomComponent.jsx
import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Wrapper = styled.section`
  width: 44.4rem;
  //height: 56.2rem;
  margin: 1.4rem;
  background-color: #ddd;
  border-radius: 2rem;
`;

const Cr = ({ data }) => {
  const [text, setText] = useState([]);

  useEffect(() => {
    setText([...text, data.ai.answer]);
  }, []);

  return (
    <Wrapper>
      {text.map((v, i) => {
        <p>v</p>;
      })}
    </Wrapper>
  );
};

export default Cr;
