import Button from "../atoms/Button";
import Title from "../atoms/Title";
import Input from "../atoms/Input";

const SearchArticle = () => {
  const searchTexts = {
    title:"아토믹 디자인 연습용 Title.jsx h1",
    placeHolder:"아토믹 디자인 연습용 Input.jsx placeholder",
    text:"아토믹 디자인 연습용 Button.jsx text",
  };
  const { title, placeHolder, text } = searchTexts;
  return (
    <article>
      <Title title={ title } />
      <Input placeholder={ placeHolder } />
      <Button text={ text } />
    </article>
  );
};

export default SearchArticle;
