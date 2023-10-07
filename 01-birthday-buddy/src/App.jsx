import { useState } from "react";
import data from "./data";
import List from "./List";

const App = () => {
  // console.log(data);
  const [people, setPeople] = useState(data);

  return (
    <div>
      <header>
        <h2>React Project 01 - Birthday Buddy</h2>
      </header>
      
      <main>
        <section className="container">
          <h3>{people.length} Birthdays Today</h3>

          <List people={people} />
          
          <button 
            className="btn btn-block"
            style={{marginBottom: "1rem"}}
            onClick={() => setPeople([])}
          >
            Clear List
          </button>
          
          <button 
            className="btn btn-block"
            onClick={() => setPeople(data)}
          >
            Reset List
          </button>
        </section>
      </main>
    </div>
  );
};

export default App;
