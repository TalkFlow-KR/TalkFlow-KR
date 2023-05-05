import React from "react";
import Header from "../components/organisms/Header";
import Main from "../components/organisms/Main";

import { MAIN, HEADER, TEST, CONTAINER, BODY } from "../styles/MainPage.styled";
const MainPage = () => {
  return (
    <BODY>
      <CONTAINER>
        {/* <h1>MAIN PAGE</h1> */}
        {/* <h2>아토믹 디자인 이해용 테스트 컴포넌트</h2> */}
        {/* <TEST>test</TEST> */}
        {/* <HEADER>
        <Header test={TEST} />
      </HEADER> */}
        <MAIN>
          <Main />
        </MAIN>
      </CONTAINER>
    </BODY>
  );
};

export default MainPage;
