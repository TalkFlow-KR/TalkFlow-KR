import axios from "axios";
const KaKaoLogin = () => {
  // const Rest_api_key = "REST API KEY"; //REST API KEY
  const Rest_api_key = "3561839c11114e307a2755ba1be39407"; //REST API KEY
  const redirect_uri = "http://localhost:3000/auth"; //Redirect URI
  // oauth 요청 URL
  const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${Rest_api_key}&redirect_uri=${redirect_uri}&response_type=code`;
  //https://kauth.kakao.com/oauth/authorize?client_id=3561839c11114e307a2755ba1be39407&redirect_uri=http://localhost:3000/auth&response_type=code
  const handleLogin = async () => {
    window.location.href = kakaoURL;
    const code = new URL(window.location.href).searchParams.get("code");
    console.log(code);
    const res = await axios.post("http://localhost:8000/kakao", code);
    console.log(res);
  };
  return (
    <>
      <button onClick={handleLogin}>카카오 로그인</button>
    </>
  );
};
export default KaKaoLogin;
