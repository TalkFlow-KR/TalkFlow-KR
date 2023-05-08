//components
import MainPage from "pages/MainPage.jsx";
import Chat from "pages/Chat.jsx";
// import Register from "pages/Register"
// import AuthForm from "./components/organisms/Auth/AuthForm";

//style
import { GlobalStyle } from "styles/GlobalStyle.styled";
import { ThemeProvider } from "styled-components";
import theme from "styles/themeProvider/theme";

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

// Route


function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        {/* <AuthForm/> */}
        {/*TEST*/}
        {/*<p>TEST</p>*/}
        {/*<Mobile>*/}
        {/*  <mobileTest>test</mobileTest>*/}
         {/* <MainPage /> */}
        {/*</Mobile>*/}
        {/*<Pc>*/}
        {/*  <MainPage />*/}
        {/*</Pc>*/}
        {/* <Register/> */}
        <Chat/>
      </ThemeProvider>
    </>
  );
}


export default App;
