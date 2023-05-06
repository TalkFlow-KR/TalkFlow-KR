import React from "react";
import Header from "../components/organisms/Header";
// import Header from "../components/organisms/Header";
// import Main from "../components/organisms/Main";

// import { MAIN, HEADER, TEST } from "../styles/MainPage.styled";

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
    </div>
  );
};

export default MainPage;
