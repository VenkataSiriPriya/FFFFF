import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import About from "./default/About";
import Home from "./default/Home";
import Post from "./Main/Post";
import Apart from "./buy/Apart";
import Villas from "./buy/Villas";
import Luxury from "./buy/Luxury";
import Commercial from "./buy/Commercial";
import Plots from "./buy/Plots";




function App() {
  return (
    <Router>
      <Navbar /> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/post" element={<Post />} />
        <Route path="/apartment" element={<Apart />} />
        <Route path="/villa" element={<Villas />} />
        <Route path="/luxury" element={<Luxury />} />
        <Route path="/commercial" element={<Commercial />} />
        <Route path="/plots" element={<Plots />} />
      
      </Routes>
      <Footer />

    </Router>

  );
}

export default App;
