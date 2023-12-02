import { useState, useEffect } from "react";
import { shortList, list, longList } from "./data";
import { FaQuoteRight } from "react-icons/fa";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const Carousel = () => {
  const [people, setPeople] = useState(longList);
  const [currentPerson, setCurrentPerson] = useState(0);

  const moveSlider = (direction) => {
    setCurrentPerson((oldPerson) => {
      let newPerson = 0;
      if (direction === "prev") {
        //  newPerson = (oldPerson === 0) ? people.length -1 : oldPerson - 1;
        newPerson = (oldPerson - 1 + people.length) % people.length;
      } else if (direction === "next") {
        // newPerson = (oldPerson === people.length -1) ? 0 : oldPerson + 1;
        newPerson = (oldPerson + 1) % people.length;
      }
      return newPerson;
    });
  };

  useEffect(() => {
    let intervalID = setInterval(() => {
      moveSlider("next");
    }, 5000);
    return () => {
      clearInterval(intervalID);
    };
  }, [currentPerson]);

  return (
    <section className="slider-container">
      {people.map((person, index) => {
        const { id, image, name, title, quote } = person;
        
        return (
          <article
            key={id}
            className="slide"
            style={{
              transform: `translateX(${100 * (index - currentPerson)}%`,
              opacity: index === currentPerson ? 1 : 0,
              visibility: index === currentPerson ? "visible" : "hidden",
            }}>
            <img className="person-img" src={image} alt={name} />
            <h5 className="name">{name}</h5>
            <p className="title">{title}</p>
            <p className="text">{quote}</p>
            <FaQuoteRight className="icon" />
          </article>
        );
      })}

      <button onClick={() => moveSlider("prev")}>
        <FiChevronLeft className="prev" />
      </button>
      
      <button onClick={() => moveSlider("next")}>
        <FiChevronRight className="next" />
      </button>
    </section>
  );
};

export default Carousel;
