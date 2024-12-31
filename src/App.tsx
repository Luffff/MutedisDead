import Landing from "./Landing";
import Shop from "./Shop";
import About from "./About"
import "./App.css";
import { HashRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Landing/>}/>
          <Route path="/shop" element={<Shop/>}/>
          <Route path="/about" element={<About/>}/>
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
