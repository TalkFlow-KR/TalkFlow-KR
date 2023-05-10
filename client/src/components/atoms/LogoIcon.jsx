import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPizzaSlice } from "@fortawesome/free-solid-svg-icons";

const LogoIcon = () => {
  console.log("LOGO ICON CLICKED!");
  return (
    <div>
      <h1>
        {/* <img src="" alt="페이지 로고" /> */}
        {/* 임시 아이콘 */}
        <FontAwesomeIcon icon={faPizzaSlice} />
      </h1>
    </div>
  );
};

export default LogoIcon;
