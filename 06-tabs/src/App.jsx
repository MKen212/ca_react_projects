import { useState, useEffect } from "react";
import ErrorComp from "./ErrorComp";
import Loading from "./Loading";
import BtnContainer from "./BtnContainer";
import JobInfo from "./JobInfo";


const url = "/api/react-tabs-project";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [jobs, setJobs] = useState([]);
  const [currentItem, setCurrentItem] = useState(0);

  const getJobs = async () => {
    setIsError(false);
    setIsLoading(true);
    try {
      const resp = await fetch(url);
      if (!resp.ok) {
        throw new Error("No Data retrieved.");
      }
      const data = await resp.json();
      setIsLoading(false);
      setJobs(data);
    } catch (error) {
      setIsError(true);
      setIsLoading(false);
      console.error(error);
    }
  };

  useEffect (() => {
    getJobs();
  }, []);
  // console.log(jobs);

  return (
    <div>
      <header className="title" style={{marginBottom: "3rem"}}>
        <h2>React Project 06 - Tabs</h2>
        <div className="title-underline"></div>
      </header>

      <main className="jobs-center">
        {isError ? (
          <ErrorComp />
        ) : (
          isLoading ? (
            <Loading />
          ) : (
            <>
              <BtnContainer jobs={jobs} currentItem={currentItem} setCurrentItem={setCurrentItem} />
              <JobInfo job={jobs[currentItem]} />
            </>
          )
        )}
      </main>
    </div>
  );
};

export default App;
