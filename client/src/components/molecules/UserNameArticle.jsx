import React from "react";
import { Wrapper } from "../../styles/UserNameArticle.styled";
import { Box } from "../../styles/Article.styled";
import LogoIcon from "../atoms/LogoIcon";
const UserNameArticle = () => {
  return (
    <Wrapper>
      <Box>
        <LogoIcon />
        <h2>userdata</h2>
      </Box>
    </Wrapper>
  );
};

export default UserNameArticle;
