import { useState } from "react";
// import { FaBeer } from "react-icons/fa";
import data from "./data";
import Review from "./Review";

const App = () => {
  const [reviews, setReviews] = useState(data);
  const [currentID, setCurrentID] = useState(0);
  // console.log(reviews);

  const cycleID = (newID) => {
    // console.log(newID);
    // console.log(newID % reviews.length);
    // console.log((newID + reviews.length) % reviews.length);
    
    // Original Approach
    // if (newID < 0) {
    //   newID = reviews.length -1;
    // } else if (newID > reviews.length -1) {
    //   newID = 0;
    // }
    // setCurrentID(newID);

    // Alternative Approach:
    // console.log((3 + 4) % 4);
    // (-1 + 4) % 4 === 3
    // (0 + 4) % 4 === 0
    // (1 + 4) % 4 === 1
    // (2 + 4) % 4 === 2
    // (3 + 4) % 4 === 3
    // (4 + 4) % 4 === 0
    const newValue = (newID + reviews.length) % reviews.length;
    setCurrentID(newValue);
  };

  const randomID = () => {
    let randomNumber = currentID;
    while (randomNumber === currentID) {
      randomNumber = Math.floor(Math.random() * reviews.length);
      // console.log(randomNumber);
    }
    cycleID(randomNumber);
  };

  return (
    <div className="container">
      <header className="title">
        <h2>React Project 03 - Reviews</h2>
        <div className="title-underline"></div>
      </header>

      <main>
        {/* <FaBeer className="beer-icon" /> */}
        <Review key={currentID} {...reviews[currentID]} cycleID={cycleID} currentID={currentID} randomID={randomID} />
      </main>
    </div>
  );
};

export default App;
