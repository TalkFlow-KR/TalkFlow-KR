//components
// import MainPage from "pages/MainPage.jsx";
// import Chat from "pages/Chat.jsx";
// 회원가입 페이지
import Register from "p/Register";
import Settings from "p/Settings";
// import AuthForm from "./components/organisms/Auth/AuthForm";
// 404 페이지
import Error from "pages/Error";

//style
import { GlobalStyle } from "styles/GlobalStyle.styled";
import styled, { ThemeProvider } from "styled-components";
import theme from "styles/themeProvider/theme";
import LoginForm from "./components/organisms/Auth/LoginForm";
import RegisterForm from "./components/organisms/Auth/RegisterForm";

import Main from "./p/Main";
import Index from "./p/Index";

import NewChat from "./p/NewChat";
import History from "./p/History";
import Notification from "./p/Notification";
import KakaoAuth from "./components/organisms/Auth/KakaoAuth";
// 로그인 페이지
import Login from "pages/Login";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [loginData, setLoginData] = useState(null);
  const [UserID, setUserID] = useState("");
  const [isUserActive, setIsUserActive] = useState(false);

  useEffect(() => {
    if (!UserID) {
      setIsUserActive(false);
    } else {
      setIsUserActive(true);
    }
  }, [UserID]);
  // login input value 변화
  const onChange = (setState, e) => {
    setState(e.target.value);
  };
  // login submit 버튼
  const onSubmit = async (e) => {
    setIsLoading(true);
    e.preventDefault();
    const data = {
      email: email,
      password: password,
    };
    const res = await axios.post("http://localhost:8000/post-login", data);
    if (res.data === "wrong") {
      setLoginData(false);
    }
    if (res.data === "success") {
      setLoginData(true);
      setUserID(res.data.userid);
    }
    setIsLoading(false);
  };
  const loginProps = {
    email,
    setEmail,
    password,
    setPassword,
    onChange,
    onSubmit,
    isLoading,
    setIsLoading,
    loginData,
    setLoginData,
  };

  return (
    <ThemeProvider theme={theme.lightTheme}>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main isUserActive={isUserActive} />} />
          {/*화면 첫페이지 */}
          <Route path="/index" element={<Index />} />
          {/* 채팅방 생성 페이지*/}
          <Route
            path="/newchat"
            element={<NewChat isUserActive={isUserActive} />}
          />
          {/* 채팅 내역  페이지 */}
          <Route
            path="/history"
            element={<History isUserActive={isUserActive} />}
          />
          {/* 공지사항 페이지*/}
          <Route
            path="/notification"
            element={<Notification isUserActive={isUserActive} />}
          />
          <Route path="/settings" element={<Settings />} />
          {/*로그인 페이지 경로 /login*/}
          <Route path="/login" element={<Login {...loginProps} />} />
          {/*<Route path="/oauth/kakao/callback" element={<LoginForm />} />*/}
          <Route path="/oauth" element={<KakaoAuth />} />
          <Route path="/register" element={<Register />} />
          <Route path="/*" element={<Error />} />
          {/* <Route path="/register" element={<RegisterForm />} /> */}

          {/* 사라지는 login -> loginForm으로 바로 연결 */}
          {/* <Route path="/login" element={<Login />} /> */}
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
