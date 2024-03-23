import NavBar from "./NavBar";

function App() {
  return (
    <div>
      <header className="title" style={{marginBottom: "3rem"}}>
        <h2>React Project 11 - Navbar</h2>
        <div className="title-underline"></div>
      </header>

      <main>
        <NavBar />
      </main>
    </div>
  );
};

export default App;
