//components
import MainPage from "pages/MainPage.jsx";

//style
import { GlobalStyle } from "./styles/GlobalStyle.styled";
import { ThemeProvider } from "styled-components";
import theme from "./styles/theme";

//Route

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        TEST
        <p>TEST</p>
        <MainPage />
      </ThemeProvider>
    </>
  );
}

export default App;
