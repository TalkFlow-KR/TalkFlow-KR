import React from "react";
import { Wrapper } from "../../styles/NavArticle.styled";
import Button from "components/atoms/Button";
import { Link } from "react-router-dom"; // import Link component


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
        {/* <Link to="/">
            <Button text={text.menuText} />
          </Link>
          <Link to="/new-chat">
            <Button text={text.menuText2} />
          </Link>
          <Link to="/history">
            <Button text={text.menuText3} />
          </Link>
          <Link to="/bookmark">
            <Button text={text.menuText4} />
          </Link>
          <Link to="/notice">
            <Button text={text.menuText5} />
          </Link> */}
          
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
