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
import DarkModeBtn from "./components/atoms/DarkModeBtn";
import Loading from "./components/atoms/Loading";
import RegisterForm from "./components/organisms/Auth/RegisterForm";
import SuccessRegister from "./components/organisms/Auth/SuccessRegister";
// import NewRegister from "./components/organisms/Auth/NewRegister";

function App() {
  // 유저의 로그인 값
  // const [UserID, setUserID] = useState("유저임시키값 test");
  // test 위해서는 UserID 채워주시고 , isUserActive true 해주셔야해요
  const [UserID, setUserID] = useState("");
  // 유저 이메일 / 닉네임
  const [userEmail, setUserEmail] = useState("");
  // 로그인 & 로그아웃
  const [isUserActive, setIsUserActive] = useState(false);
  //
  const [test, test2] = useState("1");
  //
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [loginData, setLoginData] = useState(false);
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
  const onChange = useCallback((setState, e) => {
    setState(e.target.value);
  }, []);
  // 다크모드 체크
  useEffect(() => {
    const currentTheme = window.localStorage.getItem("theme") || "light";
    if (mode !== currentTheme) {
      setMode(currentTheme);
    }
  }, [mode]);
  const toastId = "중복방지코드";
  const notify = useCallback((text) => {
    toast(text);
  }, []);

  // login submit 버튼
  const onSubmit = useCallback(
    async (emailfromLogin, pwfromLogin) => {
      console.log("App.js onSubmit Test", emailfromLogin, pwfromLogin);
      setIsLoading(true);
      const data = {
        email: emailfromLogin,
        password: pwfromLogin,
      };
      // {msg: 'success', userid : result.id, email : result.email});
      const res = await axios.post(`/post-login`, data);
      console.log(res);

      if (res.data === "fail") {
        setLoginData(false);
        notify("비밀번호 혹은 아이디가 맞지 않습니다.");
      }
      if (res.data.msg === "success") {
        console.log("2", "success");

        setLoginData(true);
        setIsUserActive(true);
        setUserID(res.data.userid);
        setUserEmail(res.data.email);
        notify("로그인 성공 !");
      }
      setIsLoading(false);
    },
    [notify]
  );

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
      <ToastContainer
        position="bottom-center"
        autoClose={8000}
        hideProgressBar={true}
        limit={1}
        closeButton={true}
        closeOnClick={true}
        draggable={true}
        theme={mode === "light" ? "light" : "dark"}
        toastId={toastId}
      />
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route
            path="/main"
            element={
              <Main
                userEmail={userEmail}
                isUserActive={isUserActive}
                userId={UserID}
                ChangeTheme={ChangeTheme}
                mode={mode}
                setUserID={setUserID}
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
                notify={notify}
                mode={mode}
              />
            }
          />

          {/* 채팅방 생성 페이지*/}
          <Route
            path="/newChat"
            element={
              <Settings
                userEmail={userEmail}
                isUserActive={isUserActive}
                userId={UserID}
                mode={mode}
                ChangeTheme={ChangeTheme}
              />
            }
          />
          <Route
            path="/settings"
            element={
              <Settings
                userEmail={userEmail}
                isUserActive={isUserActive}
                userId={UserID}
                mode={mode}
                ChangeTheme={ChangeTheme}
              />
            }
          />
          {/* 채팅 내역  페이지 */}
          <Route
            path="/history"
            element={
              <History
                userEmail={userEmail}
                isUserActive={isUserActive}
                userId={UserID}
                mode={mode}
                ChangeTheme={ChangeTheme}
              />
            }
          />
          {/* 공지사항 페이지*/}
          <Route
            path="/notification"
            element={
              <Notification
                userEmail={userEmail}
                isUserActive={isUserActive}
                userId={UserID}
                mode={mode}
                ChangeTheme={ChangeTheme}
              />
            }
          />

          {/*로그인 페이지 경로 /login*/}
          <Route
            path="/login"
            element={
              <Login
                {...loginProps}
                isUserActive={isUserActive}
                notify={notify}
                mode={mode}
              />
            }
          />
          {/*<Route path="/oauth/kakao/callback" element={<LoginForm />} />*/}
          <Route path="/oauth" element={<KakaoAuth />} />
          <Route path="/authRedirect" element={<AuthRedirect />} />
          <Route
            path="/register"
            element={<SignUp isUserActive={isUserActive} notify={notify} />}
          />
          <Route path="/successregister" element={<SuccessRegister />} />
          <Route path="/sk" element={<Skeleton />} />
          <Route path="/loading" element={<Loading />} />
          <Route path="/*" element={<Error />} />

          {/* 사라지는 login -> loginForm으로 바로 연결 */}
          {/* <Route path="/login" element={<Login />} /> */}
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
