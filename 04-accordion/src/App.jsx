import { useState } from "react";
import data from "./data";
import QuestionList from "./QuestionList";

// This version Expands/Collapses each question individually

function App() {
  const [questions, setQuestions] = useState(data);
  // console.log(questions);

  return (
    <div>
      <header className="title">
        <h2>React Project 04 - Accordion</h2>
        <div className="title-underline"></div>
      </header>

      <main>
        <QuestionList questions={questions} />
      </main>
    </div>
  );
};

export default App;
