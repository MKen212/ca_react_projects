import QuestionItem2 from "./QuestionItem2";

const QuestionList2 = ( {questions, activeID, toggleActiveID} ) => {
  return (
    <section className="container">
      {
        questions.map((question) => {
          return (
            <QuestionItem2
              key={question.id}
              {...question}
              activeID={activeID}
              toggleActiveID={toggleActiveID} />
          )
        })
      }
    </section>
  );
};

export default QuestionList2;
