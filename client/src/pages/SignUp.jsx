//Main.jsx
import React, { useEffect, useState } from "react";
import styled from "styled-components";
// import RegisterForm from "components/organisms/Auth/RegisterForm";
import SuccessRegister from "../components/organisms/Auth/SuccessRegister";
import Register from "../components/organisms/Auth/Register";
import { useNavigate } from "react-router-dom";
import Loading from "../components/atoms/Loading";
import RegisterForm from "../components/organisms/Auth/RegisterForm";

const Container = styled.main`
  position: relative;
  flex: 1 1 0;
  //width: 140rem;
  //max-width: 144rem;
  //min-width: 36rem;
  //width: 100%;
  //height: 100%;
  //height: 70rem;
  //width: 80vw;
  height: 80vh;
  //height: 100%;
  //width: 100%;
  border-radius: 2rem;
  color: ${({ theme }) => theme.color.text100};
  background-color: ${({ theme }) => theme.color.bg200};
  margin: 2rem;
  padding: 2rem;
  display: flex;
  /* flex-direction: column; */
  justify-content: space-around;
  gap: 6rem;
  align-items: stretch;
`;
const SignUp = ({ isUserActive, notify }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isFinish, setIsFinish] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setIsLoading(true);
    if (isUserActive) {
      navigate("/authredirect");
    } else {
      setIsLoading(false);
    }
  }, [isUserActive, navigate]);

  const registerProps = {
    isFinish,
    setIsFinish,
  };
  return (
    <Container>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          {isFinish ? (
            <SuccessRegister />
          ) : (
            <RegisterForm {...registerProps} notify={notify} />
          )}
        </>
      )}
    </Container>
  );
};

export default SignUp;
