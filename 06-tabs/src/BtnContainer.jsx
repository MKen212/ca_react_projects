
const BtnContainer = ({ jobs, currentItem, setCurrentItem }) => {
  return (
    <nav className="btn-container">
      { jobs.map((job, index) => {
        // console.log(job);
        return (
          <button 
            key={job.id}
            className={index === currentItem ? "job-btn active-btn" : "job-btn"}
            // className={`job-btn ${index === currentItem && "active-btn"}`} - NOTE this returns FALSE as a class!
            onClick={() => setCurrentItem(index)}>
            {job.company}
          </button>
        )
      })}
    </nav>
  );
};

export default BtnContainer;
