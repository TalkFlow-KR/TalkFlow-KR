//components
import MainPage from "pages/MainPage.jsx";
import Chat from "pages/Chat.jsx";
// import Register from "pages/Register"
import AuthForm from "./components/organisms/Auth/AuthForm";

//style
import { GlobalStyle } from "styles/GlobalStyle.styled";
import styled, { ThemeProvider } from "styled-components";
import theme from "styles/themeProvider/theme";
import LoginForm from "./components/organisms/Auth/LoginForm";
import RegisterForm from "./components/organisms/Auth/RegisterForm";

import Main from "./p/Main";
import Index from "./p/Index";
import NewChat from "./p/NewChat"
import History from "./p/History"
import Notification from "./p/Notification"
import Login from "./p/Login"
import Register from "./p/Register"

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

          <Route path="/" element={<Main />} />
          <Route path="/index" element={<Index />} />
          <Route path="/newchat" element={<NewChat />} />
          <Route path="/history" element={<History />} />
          <Route path="/notification" element={<Notification />} />      
          <Route path="/login" element={<LoginForm />} />
          <Route path="/oauth/kakao/callback" element={<LoginForm />} />
          <Route path="/auth" element={<KakaoAuth />} />
          <Route path="/register" element={<RegisterForm />} />
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
