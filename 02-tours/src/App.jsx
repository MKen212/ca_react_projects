import { useState, useEffect } from "react";
import Loading from "./Loading";
import Tours from "./Tours";
import ErrorComp from "./ErrorComp";

const url = "/api/react-tours-project";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState (false);
  const [tours, setTours] = useState([]);

  const getTours = async () => {
    setIsError(false);
    setIsLoading(true);
    try {
      const resp = await fetch(url);
      console.log(resp);
      
      if (!resp.ok) {
        throw new Error("No Data retrieved.");
      }
      const data = await resp.json();
      setIsLoading(false);
      setTours(data);
    } catch (error) {
      setIsError(true);
      setIsLoading(false);
      console.log(error);
    }
  };

  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  }

  useEffect(() => {
    getTours();
  }, []);

  return (
    <div>
      <header className="title">
        <h2>React Project 02 - Tours</h2>
        <div className="title-underline"></div>
      </header>
      
      <main>
        {isError ? (
          <ErrorComp />
        ) : (
          isLoading ? (
            <Loading />
          ) : (
            <>
              <Tours tours={tours} removeTour={removeTour} />
              <div className="title">
                {tours.length === 0 ? (
                  <div>
                    <h2 style={{marginBottom: "3rem"}}>No Tours Left!</h2>
                  </div>
                ) : (
                  <div></div>
                )}
                <button
                  className="btn"
                  onClick={() => getTours()}>
                  Refresh Tours List
                </button>

              </div>
            </>
          )
        )}
      </main>
    </div>
  );
};

export default App;
