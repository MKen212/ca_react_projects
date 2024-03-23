// import { useState } from "react";

const SingleItem = ({ item, toggleCompleted, removeItem }) => {
  // const [isChecked, setIsChecked] = useState(item.completed);

  return (
    <article className="single-item">
      <input
        type="checkbox"
        // checked={isChecked}
        checked={item.completed}
        // onChange={() => setIsChecked(!isChecked)}
        onChange={() => toggleCompleted(item.id)}        
      />

      <p style={{
        // textDecoration: isChecked && "line-through",
        textDecoration: item.completed && "line-through",
      }}
      >
        {item.name}
      </p>

      <button
        className="btn remove-btn"
        type="button"
        onClick={()=> removeItem(item.id, item.name)}
      >
        Delete
      </button>
    </article>
  );
};

export default SingleItem;
