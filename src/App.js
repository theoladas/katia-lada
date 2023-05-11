import { React, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import GlobalStyle from "./components/GlobalStyle";
import "./fonts/daniel.ttf";
import Nav from "./components/Nav";
import Homepage from "./pages/Homepage";
import Gallery from "./pages/Gallery";
import MakeUp from "./pages/MakeUp";
import Footer from "./components/Footer";

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
        <Route path="/gallery" exact element={<Gallery />} />
      </Routes>
      <Routes>
        <Route path="/make-up" exact element={<MakeUp />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
