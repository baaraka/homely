import Why from "./why/Why";
import "./App.css";
import Home from "./home/Home";
import TopBar from "./topBar/TopBar";

function App() {
  return (
    <div className="App">
      <TopBar />
      <Home />
      <Why />
    </div>
  );
}

export default App;
