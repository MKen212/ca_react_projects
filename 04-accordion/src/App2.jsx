import { useEffect, useState } from "react";
import data from "./data";
import QuestionList2 from "./QuestionList2";

// This version Expands/Collapses each question uniquely

function App2() {
  const [questions, setQuestions] = useState(data);
  // console.log(questions);
  const [activeID, setActiveID] = useState(null);

  const toggleActiveID = (id) => {
    if (id === activeID) {
      setActiveID(null);
    } else {
      setActiveID(id);
    }
  };
  
  return (
    <div>
      <header className="title">
        <h2>React Project 04 - Accordion</h2>
        <div className="title-underline"></div>
      </header>

      <main>
        <QuestionList2 
          questions={questions}
          activeID={activeID}
          toggleActiveID={toggleActiveID} />
      </main>
    </div>
  );
};

export default App2;
