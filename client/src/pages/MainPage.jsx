import React from "react";
import Header from "../components/organisms/Header";
import Main from "../components/organisms/Main";
import styled from "styled-components";
import Aside from "components/organisms/Aside";

const MainLayout = styled.main`
  width: 100vw;
  height: 100%;
  display: flex;
  background-color: tan;
  justify-content: center;

  /* @media screen { (max-width:{(props)=>props.theme.layout.width.mobile)}{
    ba
  } */
`;

const MainPage = () => {
  // styled 분리화
  // const MAIN = styled.div`
  //   margin: 3rem;
  //   background-color: tomato;
  // `
  //
  // const HEADER = styled.div`
  // margin: 3rem;
  //   background-color: #0cf22a;
  // `
  // const TEST = styled(MAIN)`
  // background-color: tan;
  //

  return (
    <div>
      <Header />
      <MainLayout>
        <Aside />
        <Main />
      </MainLayout>
    </div>
  );
};

export default MainPage;
