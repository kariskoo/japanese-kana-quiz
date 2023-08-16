import { useContext } from "react";
import { QuizContext } from "../contexts/globalState";

function Menu() {
  const { setAppState, setChosenKana } = useContext(QuizContext);

  return (
    <div className="mx-auto mt-4 flex flex-col items-center justify-center">
      <button
        className="btn btn-primary my-1.5 w-56"
        onClick={() => {
          setChosenKana("hiragana");
          setAppState("quiz");
        }}
      >
        Hiragana - ひらがな
      </button>
      <button
        className="btn btn-primary my-1.5 w-56"
        onClick={() => {
          setChosenKana("katakana");
          setAppState("quiz");
        }}
      >
        Katakana - カタカナ
      </button>
    </div>
  );
}

export default Menu;
