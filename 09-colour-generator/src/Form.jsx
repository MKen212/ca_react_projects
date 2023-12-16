import { useState } from "react";

const Form = ({ getColourValues }) => {
  const [colour, setColour] = useState("#df00ff");
  
  const handleColourChange = (e) => {
    setColour(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    getColourValues(colour);
  };

  return (
    <section className="container">
      <h4>Select:</h4>
      <form className="color-form" onSubmit={handleSubmit}>
        {/* Colour Picker */}
        <input 
          type="color"
          name="colourPicker"
          id="colourPicker"
          value={colour}
          onChange={handleColourChange} />

        {/* Colour Text */}
        <input 
          type="text"
          name="colourText"
          id="colourText"
          value={colour}
          placeholder="#df00ff"
          onChange={handleColourChange} />

        {/* Submit Button */}
        <button
          type="submit"
          className="btn"
          style={{background: colour}}>
          Submit
        </button>
      </form>
    </section>
  );
};

export default Form;
