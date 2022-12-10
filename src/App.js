import GlobalStyle from "./components/GlobalStyle";
import "./fonts/daniel.ttf";
import Nav from "./components/Nav";
import Homepage from "./pages/Homepage";
import Footer from "./components/Footer";
import { Nav2 } from "./components/Nav2";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Nav2 />
      {/* <Nav /> */}
      <Homepage />

      <Footer />
    </div>
  );
}

export default App;
