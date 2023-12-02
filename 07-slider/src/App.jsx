import Carousel from "./Carousel";

function App() {
  return (
    <div>
      <header className="title" style={{marginBottom: "3rem"}}>
        <h2>React Project 07 - Slider</h2>
        <div className="title-underline"></div>
      </header>

      <main>
        <Carousel />
      </main>
    </div>
  );
};

export default App;
