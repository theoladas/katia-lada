import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "./components/GlobalStyle";
import "./fonts/daniel.ttf";
import Nav from "./components/Nav";
import Homepage from "./pages/Homepage";
import MakeUp from "./pages/MakeUp";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <Routes>
        <Route path="/" exact element={<Homepage />} />
      </Routes>
      <Routes>
        <Route path="/make-up" exact element={<MakeUp />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
