// ChatComponent.jsx
import React from "react";
import styled from "styled-components";
// import Overlay from "../atoms/Overlay";

// const Wrapper = styled.section`
//   width: 92.4rem;
//   height: 33.6rem;
//   background-color: tomato;
//   margin-top: 2.4rem;
//   border-radius: 2rem;
// `;
const ChatComponent = () => {
  return (
    <>
    
    {/* <Wrapper> */}
      <div className="img-wrap">
        <img src="" alt="" />
        <div className="title-box">
          <h2>Chat TITLE</h2>
          <h3>Chat THEME/SETTING/ENGLISH</h3>
        </div>
      </div>
      {/*flex */}
      <div className="message-wrap">
        <div className="photo"></div>
        <span>
          <strong>CHAT AI:</strong>
          LAST MESSAGE IS HERE !
        </span>
        <span>DATE : 2099.09.99</span>
      </div>
    {/* </Wrapper> */}
    </>
  );
};

export default ChatComponent;
