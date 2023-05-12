import React, { useEffect } from "react";

const KaKaoAuth2 = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.async = true;
    script.src = "https://developers.kakao.com/sdk/js/kakao.js";
    document.head.appendChild(script);
  }, []);

  function kakaoLogin() {
    let nickname;
    Kakao.Auth.login({
      success: function (response) {
        Kakao.API.request({
          url: "/v2/user/me",
          success: function (response) {
            console.log(response);
            nickname = response.properties.nickname;
            console.log("Login_nickname > ", nickname);

            axios({
              method: "post",
              url: "/kakao",
              data: {
                id: response.id,
                nickname: nickname,
              },
            }).then((res) => {
              console.log(res);
            });
          },
          fail: function (error) {
            console.log(error);
          },
        });
      },
      fail: function (error) {
        console.log(error);
      },
    });
  }
  return (
    <div>
      <button onClick={kakaoLogin}>test</button>
    </div>
  );
};

export default KaKaoAuth2;
