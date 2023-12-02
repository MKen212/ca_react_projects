import Duties from "./Duties";

const JobInfo = ({ job }) => {
  const { company, dates, title, duties } = job;
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
