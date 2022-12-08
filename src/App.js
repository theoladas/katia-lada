import GlobalStyle from "./components/GlobalStyle";
import "./fonts/daniel.ttf";
import Nav from "./components/Nav";
import Homepage from "./pages/Homepage";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <Homepage />

      <Footer />
    </div>
  );
}

export default App;
