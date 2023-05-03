
import React from 'react';
import Header from '../components/organisms/Header'
import Main from '../components/organisms/Main'

import { MAIN, HEADER, TEST } from '../styles/MainPage.styled'


export const MAIN = styled.div`
  margin: 3rem;
  background-color: tomato;
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
  // `

  return (
      <div>

        <h1>MAIN PAGE</h1>
        <h2>아토믹 디자인 이해용 테스트 컴포넌트</h2>
        <TEST>
          test
        </TEST>
        <HEADER>
          <Header test={ TEST } />
        </HEADER>
        <MAIN>
          <Main />
        </MAIN>
      </div>

  );
};

export default MainPage;
