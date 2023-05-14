import React from "react";
import { useNavigate } from "react-router-dom";

const AuthRedirect = () => {
  const navigate = useNavigate();
  return (
    <div>
      이미 로그인 되어있습니다.
      <button onClick={() => navigate("/")}>메인으로 돌아가기</button>
    </div>
  );
};

export default AuthRedirect;
