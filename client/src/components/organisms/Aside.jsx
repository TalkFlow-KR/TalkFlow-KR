import React from "react";
import styled from "styled-components";
import NavArticle from "components/molecules/NavArticle";
import UserNameArticle from "components/molecules/UserNameArticle";

const LeftSection = styled.section`
  width: 34.4rem;
  height: 100%;
  /* display: flex; */
  margin: 0 auto;
  margin-top: 2.4rem;
`;

const Aside = () => {
  return (
    <LeftSection>
      {/* <UserNameArticle /> */}
      <NavArticle />
    </LeftSection>
  );
};

export default Aside;
