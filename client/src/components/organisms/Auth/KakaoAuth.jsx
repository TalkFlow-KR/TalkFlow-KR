import React, { useEffect } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import { useState } from "react";

const Rest_api_key = "00dc2bc4743842e52f97986b0d1c037e"; //REST API KEY
const redirect_uri = "http://localhost:3000/oauth"; //Redirect URI
const code = new URL(document.location).searchParams.get("code");

const KakaoAuth = () => {
  const [token, setToken] = useState();
  const [id, setId] = useState();
  const [name, setName] = useState();
  const location = useLocation();
  // console.log('code: ',code);
  useEffect(() => {
    if (!token) return;
    let data = getProfile(token);
    console.log(data);
  }, [token]);

  useEffect(() => {
    if (!location.search) return;
    getKakaoToken();
  }, []);

  const getKakaoToken = async () => {
    await fetch("https://kauth.kakao.com/oauth/token", {
      method: "post",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: `grant_type=authorization_code&client_id=${Rest_api_key}&redirect_uri=${redirect_uri}&code=${code}`,
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.access_token) {
          console.log("token: ", data.access_token);
          setToken(data.access_token);
        } else {
          console.log("wrong");
        }
      });
  };

  const getProfile = async (token) => {
    console.log(token);
    const kakaoUser = await axios
      .get(`https://kapi.kakao.com/v2/user/me`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        console.log("data id: ", res.data.id);
        console.log("data name: ", res.data.properties.nickname);
        setId(res.data.id);
        setName(res.data.properties.nickname);
      });
      axios.post('http://localhost:8000/kakao',{id:id, nickname: name})
        .then((res)=>{
          console.log('successs')
        })
  };

  return (
    <>
      <div>{token} ||||| </div>
      <div>{id} |||| </div>
      <div>{name}</div>
    </>
  );
};

export default KakaoAuth;
