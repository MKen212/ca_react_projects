import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import Values from "values.js";
import ColourList from "./ColourList";
import Form from "./Form";

function App() {
  const [colourValues, setColourValues] = useState(new Values("#df00ff").all(10));

  const getColourValues = (colourValue) => {
    try {
      const newColourValues = new Values(colourValue).all(10);
      setColourValues(newColourValues);
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div>
      <header className="title" style={{marginBottom: "3rem"}}>
        <h2>React Project 09 - Colour Generator</h2>
        <div className="title-underline"></div>
      </header>

      <main>
        <Form getColourValues={getColourValues} />
        <ColourList colourValues={colourValues} />
        <ToastContainer position="top-center" />
      </main>
    </div>
  );
};

export default App;
