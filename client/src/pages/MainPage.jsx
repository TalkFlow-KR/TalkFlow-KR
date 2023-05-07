import React from "react";
import Header from "../components/organisms/Header";
import Main from "../components/organisms/Main";
import styled from "styled-components";

const MainLayout = styled.main`
  width: 100vw;
  height: 100%;
  display: flex;
`;
const Test = styled.aside`
  margin-left: 2.8rem;
  width: 22.2rem;
  background-color: orange;
  margin-top: 2rem;
  height: 34.4rem;
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
        <Test>NAV 구역</Test>
        <Main />
      </MainLayout>
    </div>
  );
};

export default MainPage;
