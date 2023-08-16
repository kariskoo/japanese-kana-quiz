import { useState, useContext } from "react";
import { QuizContext } from "../contexts/globalState";
import { ShuffledKana as KANA_MAPPING } from "./KanaMapping";

function Quiz() {
  const [currentKana, setCurrentKana] = useState(0);
  const [userInput, setUserInput] = useState("");
  const [answerState, setAnswerState] = useState("base");
  const { setAppState, chosenKana, score, setScore } = useContext(QuizContext);

  const displayKana = () => {
    if (chosenKana === "hiragana") {
      return KANA_MAPPING[currentKana].hiragana;
    } else if (chosenKana === "katakana") {
      return KANA_MAPPING[currentKana].katakana;
    }
  };

  const displayAnswerBox = () => {
    const answerBox = "m-3 w-full input input-bordered";
    if (answerState === "correct") {
      return answerBox + " bg-green-200 input-success";
    } else if (answerState === "wrong") {
      return answerBox + " bg-red-200 input-error";
    }
    return answerBox;
  };

  const handleKeyUp = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      e.target.blur();
      handleSubmit(e);
    }
  };

  const handleSubmit = (e) => {
    if (KANA_MAPPING[currentKana].romaji === userInput) {
      setAnswerState("correct");
      setScore(score + 1);
    } else {
      setAnswerState("wrong");
    }
    setTimeout(() => {
      if (currentKana == KANA_MAPPING.length - 1) {
        setAppState("result");
      }
      setUserInput("");
      setCurrentKana(currentKana + 1);
      setAnswerState("normal");
      e.target.focus();
    }, 1000);
  };

  return (
    <div className="mx-auto mt-6 flex w-56 flex-col items-center justify-center">
      <progress
        className="progress progress-primary rounded"
        value={currentKana}
        max={KANA_MAPPING.length}
      ></progress>
      <div className="bg-base-200 mt-[-8px] h-56 w-full justify-center rounded">
        <h1 id="jp" className="m-11 text-center text-9xl">
          {displayKana()}
        </h1>
      </div>
      <input
        className={displayAnswerBox()}
        type="text"
        placeholder="Enter rōmaji"
        value={userInput}
        onChange={(e) => setUserInput(e.target.value.toLowerCase())}
        onKeyUp={handleKeyUp}
        autoFocus
      />
    </div>
  );
}

export default Quiz;
