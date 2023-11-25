import Duties from "./Duties";

const JobInfo = ({ jobs }) => {
  const { company, dates, title, duties } = jobs[0];
  return (
    <section className="job-info">
      <h3>{title}</h3>
      <span className="job-company">{company}</span>
      <p className="job-date">{dates}</p>
      <Duties duties={duties} />
    </section>
  );
};

export default JobInfo;
