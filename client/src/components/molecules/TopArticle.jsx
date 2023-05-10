import BarIcon from "components/atoms/BarIcon";
import React, {useState} from "react";
import { Wrapper } from "styles/TopArticle.styled";
import Button from "../atoms/Button";
import Aside from "components/organisms/Aside";

const text = {
  btnText: "Start a new chat",
};

const TopArticle = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  function toggleSidebar() {
    setShowSidebar(!showSidebar);
  }

  return (
    <>
      <Wrapper>
        <button 
        style={{
          fontSize:"1.6rem", 
          backgroundColor:"#2a2b2d", 
          width:"5rem",height:"2.8rem",
          color:"white", 
          boxShadow:"none", 
          filter:"none"
          }}
          onClick={toggleSidebar}
          >
          <BarIcon/>
        </button>
        <h2>Home</h2>
        <Button text={text.btnText} />
      </Wrapper>
      {showSidebar && <Aside />}
    </>
  );
};

export default TopArticle;
