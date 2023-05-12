// const Rest_api_key = "REST API KEY"; //REST API KEY
const Rest_api_key = "3561839c11114e307a2755ba1be39407"; //REST API KEY
const redirect_uri = "http://localhost:3000/auth"; //Redirect URI
// const Secret_Key = "jMQ7TRYqb0PR5PwCP10DP6lPv0lKJ7YP";
// oauth 요청 URL
const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${Rest_api_key}&redirect_uri=${redirect_uri}&response_type=code`;
const KaKaoLogin = () => {
  const handleLogin = async () => {
    window.open(kakaoURL, "_blank");
  };
  return (
    <>
      <button onClick={handleLogin}>카카오 로그인</button>
    </>
  );
};
export default KaKaoLogin;
