//components
import MainPage from "pages/MainPage.jsx";
import Chat from "pages/Chat.jsx";
// import Register from "pages/Register"
import AuthForm from "./components/organisms/Auth/AuthForm";

//style
import { GlobalStyle } from "styles/GlobalStyle.styled";
import styled, { ThemeProvider } from "styled-components";
import theme from "styles/themeProvider/theme";
import Settings from "./pages/Settings";
import LoginForm from "./components/organisms/Auth/LoginForm";
import RegisterForm from "./components/organisms/Auth/RegisterForm";
import Loading from "./components/atoms/Loading";
import First from "./components/organisms/First";

import Index from "pages/Index";
import ChatPage from "pages/ChatPage";
import SettingsPage from "pages/SettingsPage";
import SuccessRegister from "./components/organisms/Auth/SuccessRegister";
import Main from "./p/Main";

// responsive
// import { useMediaQuery } from "react-responsive";

// export const Mobile = ({ children }) => {
//   const isMobile = useMediaQuery({
//     query: "(max-width:360px)"
//   });
//   return <>{isMobile && children}</>
// }

// export const Pc = ({ children }) => {
//   const isPc = useMediaQuery({
//     query: "(min-width:360px)"
//   });
//   return <>{isPc && children}</>
// }

// 컴포넌트 구성에 따라 이름 변경 해야함
// 404 페이지 필요
// Route

import { BrowserRouter, Route, Routes } from "react-router-dom";
import KakaoAuth from "./components/organisms/Auth/KakaoAuth";
import Test from "./components/a/Test";
import MicButton from "./components/a/MicButton";

const Wrapper = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2.4rem;
`;

function App() {
  return (
    <ThemeProvider theme={theme.lightTheme}>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          {/*<Route  exact path="/" element={<MainPage />} />*/}
          <Route exact path="/" element={<Main />} />
          <Route path="/settingspage" element={<SettingsPage />} />
          <Route path="/chatpage" element={<ChatPage />} />
          {/*<Route path="/login" element={<LoginForm />} />*/}
          <Route path="/login" element={<LoginForm />} />
          {/*<Route path="/oauth/kakao/callback" element={<KaKaoAuth />} />*/}
          <Route path="/auth" element={<KakaoAuth />} />
          <Route path="/register" element={<RegisterForm />} />
          <Route path="/test" element={<MicButton />} />
          {/* <Route path="/*" element={< 404 />} /> */}
        </Routes>
      </BrowserRouter>
    </ThemeProvider>

    //   return (
    //     <>
    //       <ThemeProvider theme={theme}>
    //         <GlobalStyle />
    //         {/**/}
    //         <Wrapper>
    //           <Main />
    //         </Wrapper>
    //         {/**/}
    //         {/* <AuthForm /> */}
    //         {/*TEST*/}
    //         {/*<p>TEST</p>*/}
    //         {/*<Mobile>*/}
    //         {/* <Index /> */}
    //         {/*  <mobileTest>test</mobileTest>*/}
    //         {/* index 페이지 */}
    //         {/*<MainPage />*/}
    //         {/*<ChatPage />*/}
    //         {/*</Mobile>*/}
    //         {/*<Pc>*/}
    //         {/*<MainPage />*/}
    //         {/*</Pc>*/}
    //         {/* <Register /> */}
    //         {/* <Chat /> */}
    //         {/*<Settings />*/}
    //         {/*회원가입/로그인 페이지*/}
    //         {/*<AuthForm />*/}
    //         {/*로딩 컴포넌트*/}
    //         {/*<Loading />*/}
    //         {/*메인페이지 섹션 아티클*/}
    //         {/*<First />*/}
    //         {/*<SettingsPage />*/}
    //         {/*<SuccessRegister />*/}
    //       </ThemeProvider>
    //     </>
  );
}

export default App;
