import { nanoid } from "nanoid";
import SingleColour from "./SingleColour";


const ColourList = ({ colourValues }) => {
  // console.log(colourValues);

  return (
    <section className="colors">
      {colourValues.map((colour, index) => {
        return <SingleColour key={nanoid()} colour={colour} index={index} />;
      })}
    </section>
  );
};

export default ColourList;
