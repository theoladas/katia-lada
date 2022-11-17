import GlobalStyle from "./components/GlobalStyle";
import "./fonts/daniel.ttf";
import Nav from "./components/Nav";
import Homepage from "./pages/Homepage";
import Services from "./pages/Services";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <Homepage />
      {/* <Services /> */}
    </div>
  );
}

export default App;
