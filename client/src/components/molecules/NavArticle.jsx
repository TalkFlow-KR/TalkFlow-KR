import React from "react";
import { Wrapper } from "../../styles/NavArticle.styled";
import Button from "components/atoms/Button";

const text = {
  menuText: "HOME",
  menuText2: "NEW CHAT",
  menuText3: "HISTORY",
  menuText4: "BOOKMARK",
  menuText5: "NOTICE",
};

const NavArticle = () => {
  return (
    <>
      <Wrapper>
        <Button text={text.menuText} />
        <Button text={text.menuText2} />
        <Button text={text.menuText3} />
        <Button text={text.menuText4} />
        <Button text={text.menuText5} />
      </Wrapper>
    </>
  );
};

export default NavArticle;
