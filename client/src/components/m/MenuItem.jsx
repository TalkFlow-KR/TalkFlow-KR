import React, { useState } from "react";
import styled from "styled-components";
import { Btn } from "styles/Button.styled";
import theme from "styles/themeProvider/theme";

const Wrapper = styled.button`
  width: 18.8rem;
  height: 4rem;
  /* height: 100%; */
  margin: 1rem;
  border-radius: 2rem;
  /* background-color: #fff; */
  /* background-color: tomato; */
  /* background-color: ${({ theme }) => theme.color.bg300}; */

  @media (max-width: 900px) {
    width: ${({ theme }) => theme.layout.width.tabletLc};
  }
`;

const MenuItem = ({ children }) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <>
      <Wrapper
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{
          backgroundColor: isHovered ? "orange" : "#fff",
          boxShadow: isHovered ? "none;" : "0 5px 20px -5px rgba(0,0,0,.7);",
          transition: "all 0.2s ease-in-out",
          transform: isHovered ? "scale(1.1)" : "scale(1)",
        }}>
        {children}
      </Wrapper>
    </>
  );
};

export default MenuItem;
