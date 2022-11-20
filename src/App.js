import GlobalStyle from "./components/GlobalStyle";
import "./fonts/daniel.ttf";
import Nav from "./components/Nav";
import Homepage from "./pages/Homepage";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <Homepage />
    </div>
  );
}

export default App;
