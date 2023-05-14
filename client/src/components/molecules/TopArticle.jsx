import { Link, useNavigate } from "react-router-dom";
import BarIcon from "components/atoms/BarIcon";
import React, { useState } from "react";
import { Wrapper } from "styles/TopArticle.styled";
import Button from "../atoms/Button";
import Aside from "components/organisms/Aside";
const TopArticle = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(-1);
  };

  const text = {
    // btnText: "Start a new chat",
    btnText: "뒤로",
  };

  // Asid 토글 나중에 지우기
  const [showSidebar, setShowSidebar] = useState(false);

  function toggleSidebar() {
    setShowSidebar(!showSidebar);
  }

  return (
    <>
      {showSidebar && <Aside />}
      <Wrapper>
        <button
          style={{
            fontSize: "1.6rem",
            // backgroundColor: "#2a2b2d",
            width: "5rem",
            height: "2.8rem",
            color: "white",
            boxShadow: "none",
            filter: "none",
          }}
          onClick={toggleSidebar}>
          <BarIcon />
        </button>
        {/* <Link to="/"> */}
        {/* 홈 임시 버튼 역할 */}
        <h2 style={{ textDecoration: "none", color: "white" }}>Home</h2>
        {/* </Link> */}
        <Button onClick={handleClick} text={text.btnText} />
        {/* <Button onClick={() => navigate(-1)}>{text.btnText}</Button> */}
        {/* <button onClick={() => navigate(-1)}>뒤로가기</button> */}
      </Wrapper>
    </>
  );
};

export default TopArticle;
