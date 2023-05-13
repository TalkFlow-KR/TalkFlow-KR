import axios from "axios";
import React, { useEffect, useState } from "react";
import qs from "qs";
import { useNavigate } from "react-router-dom";


const KaKaoLogin = () => {
  const Rest_api_key = "00dc2bc4743842e52f97986b0d1c037e"; //REST API KEY
  const redirect_uri = "http://localhost:3000/oauth"; //Redirect URI
  // oauth 요청 URL
  const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${Rest_api_key}&redirect_uri=${redirect_uri}&response_type=code`;

  const handleLogin = async () => {
    window.location.href = kakaoURL;
  }
   
  return (
    <>
      <button onClick={handleLogin}>카카오 로그인</button>
    </>
  );
};
export default KaKaoLogin;