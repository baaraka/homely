import Why from "./why/Why";
import "./App.css";
import Home from "./home/Home";
import TopBar from "./topBar/TopBar";
import Dish from "./dish/Dish";
import About from "./about/About";
import Get from "./get/Get";
import Testimonial from "./testimonial/Testimonial";
import New from "./new/New";

function App() {
  return (
    <div className="App">
      <TopBar />
      <Home />
      <Why />
      <Dish />
      <About />
      <Get />
      <Testimonial />
      <New />
    </div>
  );
}

export default App;
