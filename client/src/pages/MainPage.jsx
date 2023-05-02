import React from 'react';
import Header from '../components/organisms/Header'
import Main from '../components/organisms/Main'
import styled from 'styled-components'


const MainPage = () => {

  const HEADER = styled.div`
  margin: 3rem;
    background-color: #0cf22a;
  `
  const MAIN = styled.div`
  margin: 3rem;
    background-color: tomato;
  `
  return (
      <div>

        <h1>MAIN PAGE</h1>
        <h2>아토믹 디자인 이해용 테스트 컴포넌트</h2>
        <HEADER>
        <Header/>
        </HEADER>
        <MAIN>
        <Main/>
        </MAIN>
      </div>
  );
};

export default MainPage;
