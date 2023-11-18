import QuestionItem from "./QuestionItem";

const QuestionList = ( {questions} ) => {
  return (
    <section className="container">
      {
        questions.map((question) => {
          return <QuestionItem key={question.id} {...question} />
        })
      }
    </section>
  );
};

export default QuestionList;
