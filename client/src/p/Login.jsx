//Main.jsx
import React from "react";
import styled from "styled-components";
import LC from "../components/o/LC";
// import MC from "../components/o/MC";
// import LoginForm from "components/organisms/Auth/LoginForm";
// import AuthForm from "components/organisms/Auth/AuthForm";
import LGC from "components/o/LGC";

const Container = styled.main`
  flex: 1 1 0;
  height: 80vh;
  border-radius: 2rem;
  color: ${({ theme }) => theme.color.text100};
  background-color: ${({ theme }) => theme.color.bg200};
  margin: 2rem;
  padding: 2rem;
  display: flex;
  justify-content: space-around;
  gap: 6rem;
  align-items: stretch;
`;

const Login = () => {
  return (
    <Container>
      <LC></LC>
      <LGC></LGC>
    </Container>
  );
};

export default Login;
