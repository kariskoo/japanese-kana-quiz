import { useState } from "react";
import Menu from "./components/Menu";
import Quiz from "./components/Quiz";
import Result from "./components/Result";
import { QuizContext } from "./contexts/globalState";
import "./App.css";
import githubMark from "./assets/github-mark.png";

function App() {
  const [appState, setAppState] = useState("menu");
  const [chosenKana, setChosenKana] = useState("");
  const [score, setScore] = useState(0);

  return (
    <>
      <div className="navbar text-primary bg-base-100 drop-shadow-md">
        <div className="flex-1">
          <a
            href={window.location.href}
            className="btn btn-ghost text-xl normal-case"
          >
            Japanese Kana Quiz
          </a>
        </div>
        <div className="flex-none">
          <a
            href="https://github.com/kariskoo/japanese-kana-quiz"
            className="btn btn-square btn-ghost"
          >
            <img src={githubMark} width="20" height="20" />
          </a>
        </div>
      </div>
      <QuizContext.Provider
        value={{
          appState,
          setAppState,
          chosenKana,
          setChosenKana,
          score,
          setScore,
        }}
      >
        {appState === "menu" && <Menu />}
        {appState === "quiz" && <Quiz />}
        {appState === "result" && <Result />}
      </QuizContext.Provider>
    </>
  );
}

export default App;
