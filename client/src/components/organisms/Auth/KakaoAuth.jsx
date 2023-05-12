import React, { useEffect } from "react";
import axios from "axios";
// const Rest_api_key = "REST API KEY"; //REST API KEY
// const Rest_api_key = "3561839c11114e307a2755ba1be39407"; //REST API KEY
// const Rest_api_key = "3561839c11114e307a2755ba1be39407"; //REST API KEY
const Rest_api_key = "92b35966dfb3d1b3bd9c4cc999ebf314"; //REST API KEY
// const Rest_api_key = "deefbdc09d2f2479f3959112dd99d641"; //REST API KEY
const redirect_uri = "http://localhost:3000/auth"; //Redirect URI
// const Secret_Key = "jMQ7TRYqb0PR5PwCP10DP6lPv0lKJ7YP";
const Secret_Key = "yksAoKuyIB6IZqLIu1bjOXTlyi9O2CNw";
// oauth 요청 URL
// const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${Rest_api_key}&redirect_uri=${redirect_uri}&response_type=code`;
//https://kauth.kakao.com/oauth/authorize?client_id=3561839c11114e307a2755ba1be39407&redirect_uri=http://localhost:3000/auth&response_type=code
//
//
//

const KakaoAuth = () => {
  const code = new URL(window.location.href).searchParams.get("code");
  console.log(code);
  useEffect(() => {
    async function kakao() {
      const getToken = await axios.post("https://kauth.kakao.com/oauth/token", {
        header: {
          "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
        },
        data: {
          grant_type: "authorization_code",
          client_id: Rest_api_key,
          client_secret: Secret_Key,
          redirect_uri: redirect_uri,
          response_type: "code",
          code: code,
        },
      });
      console.log(getToken);
      console.log(getToken.data);
    }

    kakao();
  }, []);
  // const res = await axios.post("http://localhost:8000/kakao", code);
  return <div>kakao test ing</div>;
};

export default KakaoAuth;
