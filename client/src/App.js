import "styles/App.css";
import MainPage from "pages/MainPage.jsx";
import { GlobalStyle } from "./styles/GlobalStyle.styled";

function App () {
  return (
    <>
      <GlobalStyle />
      <MainPage />
    </>
  );
}

export default App;
