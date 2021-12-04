import "./App.css";
import Navbar from "./component/navbar/Navbar";
import Header from "./component/header/Header";
import Cards from "./component/card/Cards";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Cards />
    </div>
  );
}

export default App;
