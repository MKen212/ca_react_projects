import Carousel from "./Carousel";
import SlickCarousel from "./SlickCarousel";

function App() {
  return (
    <div>
      <header className="title" style={{marginBottom: "3rem"}}>
        <h2>React Project 07 - Slider</h2>
        <div className="title-underline"></div>
      </header>

      <main>
        {/* <Carousel /> */}
        <SlickCarousel />
      </main>
    </div>
  );
};

export default App;
