import React from "react";
import { Wrapper } from "../../styles/NavArticle.styled";
import Button from "components/atoms/Button";
import { Link } from "react-router-dom"; // import Link component

const text = {
  menuText: "HOME",
  menuText2: "NEW CHAT",
  menuText3: "CHATROON",
  menuText4: "BOOKMARK",
  menuText5: "NOTICE",
};

const NavArticle = () => {
  return (
    <>
      <Wrapper>
        <Link to="/">
          <Button text={text.menuText} />
        </Link>
        <Link to="/settingspage">
          <Button text={text.menuText2} />
        </Link>
        <Link to="/chatpage">
          <Button text={text.menuText3} />
        </Link>
        {/* <Link to="/chatpage">
          <Button text={text.menuText4} />
        </Link>
        <Link to="/chatpage">
          <Button text={text.menuText5} />
        </Link> */}
      </Wrapper>
    </>
  );
};

export default NavArticle;
