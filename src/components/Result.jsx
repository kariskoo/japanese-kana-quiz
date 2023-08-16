import { useContext } from "react";
import { QuizContext } from "../contexts/globalState";
import { ShuffledKana as KANA_MAPPING } from "./KanaMapping";

function Result() {
  const { score } = useContext(QuizContext);

  return (
    <div className="mx-auto mt-4 flex flex-col items-center justify-center">
      <h1 className="m-4 text-lg">
        You scored {score} out of {KANA_MAPPING.length}!
      </h1>
      <button
        className="btn btn-primary my-1.5 w-56"
        onClick={() => window.location.reload()}
      >
        Back to menu
      </button>
    </div>
  );
}

export default Result;
