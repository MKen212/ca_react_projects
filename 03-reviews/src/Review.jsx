import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

const Review = ({ name, job, imageURL, text, currentID, cycleID, randomID }) => {
  return (
    <article className="review">
      <div className="img-container">
        <img src={imageURL} alt={name} className="person-img" />
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
      </div>
      <h4 className="author">{name}</h4>
      <p className="job">{job}</p>      
      <p className="info">{text}</p>

      <div className="btn-container">
        <button
          className="prev-btn"
          onClick={() => cycleID(currentID - 1)}>
          <FaChevronLeft />
        </button>

        <button
          className="next-btn"
          onClick={() => cycleID(currentID + 1)}>
          <FaChevronRight />
        </button>
      </div>

      <button
        className="btn btn-hipster"
        onClick={() => randomID()}>
        Surprise Me!
      </button>
    </article>
  );
};

export default Review;
