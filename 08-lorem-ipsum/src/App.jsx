import { useState } from "react";
import { nanoid } from "nanoid";
import data from "./data";

function App() {
  const [count, setCount] = useState(1);
  const [text, setText] = useState([]);

  // const handleCountChange = (e) => {
  //   setCount(e.target.value);
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(count, typeof count);
    setText(data.slice(0, count));
  };

  return (
    <div>
      <header className="title" style={{marginBottom: "3rem"}}>
        <h2>React Project 08 - Lorem-Ipsum</h2>
        <div className="title-underline"></div>
      </header>

      <main className="section-center">
        <form className="lorem-form" onSubmit={handleSubmit}>
          <label htmlFor="paragraphs">Paragraphs:</label>
          <input 
            type="number"
            name="paragraphs"
            id="paragraphs"
            min={0}
            max={data.length + 1}
            step={1}
            value={count}
            onChange={(e) => setCount(+e.target.value)}
            // onChange={handleCountChange}
          />
          <button className="btn" type="submit">Generate</button>
        </form>

        {text.length > 0 && 
          <section>
            {text.map((paragraph, index) => {
              return (
                <article className="lorem-text" key={nanoid()}>
                  <p>{paragraph}</p>
                </article>
              )
            })}
          </section>
        }
      </main>
    </div>
  );
};

export default App;
