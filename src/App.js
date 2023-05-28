import { React, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import GlobalStyle from "./components/GlobalStyle";
import "./fonts/daniel.ttf";
import Nav from "./components/Nav";
import Homepage from "./pages/Homepage";
import Gallery from "./pages/Gallery";
import MakeUp from "./pages/MakeUp";
import Manicure from "./pages/Manicure";
import Waxing from "./pages/Waxing";
import Facial from "./pages/Facial";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import Lashlift from "./pages/Lashlift";

function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <Routes>
        <Route path="/" exact element={<Homepage />} />
      </Routes>
      <Routes>
        <Route path="/contact" exact element={<Contact />} />
      </Routes>
      <Routes>
        <Route path="/gallery" exact element={<Gallery />} />
      </Routes>
      <Routes>
        <Route path="/make-up" exact element={<MakeUp />} />
      </Routes>
      <Routes>
        <Route path="/waxing" exact element={<Waxing />} />
      </Routes>
      <Routes>
        <Route path="/facial" exact element={<Facial />} />
      </Routes>
      <Routes>
        <Route path="/lashlift" exact element={<Lashlift />} />
      </Routes>
      <Routes>
        <Route path="/manicure-pedicure" exact element={<Manicure />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
