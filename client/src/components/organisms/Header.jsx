import SearchArticle from "../molecules/SearchArticle";
import styled from "styled-components";
import MainPage, { MAIN } from "pages/MainPage";

const Test = styled(MAIN)`
  background-color: tan;
`;
const Header = () => {
  return (
    <nav>
      <Test>
        test
        <SearchArticle />
      </Test>
    </nav>
  );
};

export default Header;
