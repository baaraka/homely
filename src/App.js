import Why from "./why/Why";
import "./App.css";
import Home from "./home/Home";
import TopBar from "./topBar/TopBar";
import Dish from "./dish/Dish";

function App() {
  return (
    <div className="App">
      <TopBar />
      <Home />
      <Why />
      <Dish />
    </div>
  );
}

export default App;
