import { useCallback, useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import axios from "axios";
import Main from "./pages/Main";
import Index from "./pages/Index";
import History from "./pages/History";
import SignUp from "pages/SignUp";
import Settings from "pages/Settings";
import Notification from "pages/Notification";
import Error from "pages/Error";
import Login from "pages/Login";
import AuthRedirect from "pages/AuthRedirect";
import KakaoAuth from "./components/organisms/Auth/KakaoAuth";
import Skeleton from "./components/molecules/Skeleton";

//style
import { GlobalStyle } from "styles/GlobalStyle.styled";
import { ThemeProvider } from "styled-components";
import theme from "styles/themeProvider/theme";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

function App() {
  // 유저의 로그인 값
  // const [UserID, setUserID] = useState("유저임시키값 test");
  const [UserID, setUserID] = useState("");
  // 로그인 & 로그아웃
  const [isUserActive, setIsUserActive] = useState(false);
  //
  //
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [loginData, setLoginData] = useState(null);
  //
  //
  // 다크모드
  const getLocalTheme = window.localStorage.getItem("theme") || "light";
  const [mode, setMode] = useState(getLocalTheme);

  //

  //로그인 됐는지 안됐는지
  useEffect(() => {
    console.log("App.Js 에서 login 여부", UserID, isUserActive);
    if (!UserID) {
      setIsUserActive(false);
    } else {
      setIsUserActive(true);
    }
  }, [UserID, isUserActive]);
  // login input value 변화
  const onChange = (setState, e) => {
    setState(e.target.value);
  };
  // 다크모드 체크
  useEffect(() => {
    const currentTheme = window.localStorage.getItem("theme") || "light";
    if (mode !== currentTheme) {
      setMode(currentTheme);
    }
  }, [mode]);

  // login submit 버튼
  const onSubmit = async (emailfromLogin, pwfromLogin) => {
    console.log("App.js onSubmit Test", emailfromLogin, pwfromLogin);
    setIsLoading(true);
    const data = {
      email: emailfromLogin,
      password: pwfromLogin,
    };
    const res = await axios.post("http://localhost:8000/post-login", data);
    if (res.data.msg === "wrong") {
      setLoginData(false);
    }
    if (res.data.msg === "success") {
      setLoginData(true);
      setUserID(res.data.userid);
    }
    setIsLoading(false);
  };

  // dark mode 기능 함수
  const ChangeTheme = useCallback(() => {
    if (mode === "light") {
      setMode("dark");
      window.localStorage.setItem("theme", "dark");
    } else {
      setMode("light");
      window.localStorage.setItem("theme", "light");
    }
  }, [mode, setMode]);
  const loginProps = {
    email,
    setEmail,
    password,
    setPassword,
    onChange,
    onSubmit,
    setIsLoading,
    loginData,
    setLoginData,
  };

  return (
    <ThemeProvider
      theme={mode === "light" ? theme.lightTheme : theme.darkTheme}>
      <ToastContainer />
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route
            path="/main"
            element={
              <Main
                isUserActive={isUserActive}
                userId={UserID}
                ChangeTheme={ChangeTheme}
              />
            }
          />
          {/*화면 첫페이지 */}
          <Route
            exact
            path="/"
            element={
              <Index
                isUserActive={isUserActive}
                userId={UserID}
                ChangeTheme={ChangeTheme}
              />
            }
          />

          {/* 채팅방 생성 페이지*/}
          <Route
            path="/newChat"
            element={<Settings isUserActive={isUserActive} userId={UserID} />}
          />
          <Route
            path="/settings"
            element={<Settings isUserActive={isUserActive} userId={UserID} />}
          />
          {/* 채팅 내역  페이지 */}
          <Route
            path="/history"
            element={<History isUserActive={isUserActive} userId={UserID} />}
          />
          {/* 공지사항 페이지*/}
          <Route
            path="/notification"
            element={
              <Notification isUserActive={isUserActive} userId={UserID} />
            }
          />

          {/*로그인 페이지 경로 /login*/}
          <Route
            path="/login"
            element={<Login {...loginProps} isUserActive={isUserActive} />}
          />
          {/*<Route path="/oauth/kakao/callback" element={<LoginForm />} />*/}
          <Route path="/oauth" element={<KakaoAuth />} />
          <Route path="/authRedirect" element={<AuthRedirect />} />
          <Route path="/register" element={<SignUp />} />
          <Route path="/sk" element={<Skeleton />} />
          <Route path="/*" element={<Error />} />

          {/* 사라지는 login -> loginForm으로 바로 연결 */}
          {/* <Route path="/login" element={<Login />} /> */}
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
