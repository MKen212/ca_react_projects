import { AiOutlineMinus, AiOutlinePlus} from "react-icons/ai";

const QuestionItem2 = ( {id, title, info, activeID, toggleActiveID } ) => {
  const idIsActive = (activeID === id);
  // console.log(title);
  
  return (
    <article className="question">
      <header>
        <h5>{title}</h5>
        <button 
          className="question-btn"
          onClick={() => toggleActiveID(id)}
          >
          {idIsActive ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      {idIsActive && <p>{info}</p>}
    </article>
  );
};

export default QuestionItem2;
