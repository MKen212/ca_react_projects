import { useState } from "react";


const SingleItem = ({ item, toggleCompleted }) => {
  const [isChecked, setIsChecked] = useState(item.completed);

  return (
    <article className="single-item">
      <input
        type="checkbox"
        checked={item.completed}
        onChange={() => toggleCompleted(item.id)}
      />

      <p style={{
        textDecoration: item.completed && "line-through",
      }}
      >
        {item.name}
      </p>

    </article>
  );
};

export default SingleItem;
