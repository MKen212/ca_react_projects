import { v4 as uuidv4 } from "uuid";
import { FaAngleDoubleRight } from "react-icons/fa";

const Duties = ({ duties }) => {
  return (
    <article>
      {duties.map ((duty, index) => {
        const id = uuidv4();
        // console.log(id);
        return (
          <div key={id} className="job-desc">
            <FaAngleDoubleRight className="job-icon" />
            <p>{duty}</p>        
          </div>
        );
      })}
    </article>
  );
};

export default Duties;
