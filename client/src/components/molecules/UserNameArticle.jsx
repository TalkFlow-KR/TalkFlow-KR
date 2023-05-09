import React from "react";
import LogoIcon from "../atoms/LogoIcon";
import { Wrapper } from "../../styles/UserNameArticle.styled";

// 더미 데이터
const UserInfo = {
  userName: "UserName",
};
const UserNameArticle = () => {
  return (
    <Wrapper>
      <LogoIcon />
      <h2>{UserInfo.userName}</h2>
    </Wrapper>

  );
};

export default UserNameArticle;
