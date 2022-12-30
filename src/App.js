import Why from "./why/Why";
import "./App.css";
import Home from "./home/Home";
import TopBar from "./topBar/TopBar";
import Dish from "./dish/Dish";
import About from "./about/About";

function App() {
  return (
    <div className="App">
      <TopBar />
      <Home />
      <Why />
      <Dish />
      <About />
    </div>
  );
}

export default App;
