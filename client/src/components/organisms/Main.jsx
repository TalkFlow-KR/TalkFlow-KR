import React from "react";
import styled from "styled-components";
import RecentArticle from "../molecules/RecentArticle";

const Container = styled.main`
  width: 114.2rem;
  height: 100%;
  display: flex;
  justify-content: center;
  margin: 0 auto;
  margin-top: 2.4rem;
`;

const Main = () => {
  return (
    <Container>
      <RecentArticle />
      {/* <ChatComponent /> */}
    </Container>
  );
};

export default Main;
