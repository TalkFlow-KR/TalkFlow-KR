import React from "react";
import NavArticle from "components/molecules/NavArticle";
import UserNameArticle from "components/molecules/UserNameArticle";
import { Wrapper } from "styles/Aside.styled";


const Aside = () => {
  return (
  <>
    <Wrapper>
      <UserNameArticle />
      <NavArticle />
    </Wrapper>
  </>
  );
};

export default Aside;
