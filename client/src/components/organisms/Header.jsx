import SearchArticle from "../molecules/SearchArticle";
import styled from "styled-components";
import { MAIN } from "styles/MainPage.styled";

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
