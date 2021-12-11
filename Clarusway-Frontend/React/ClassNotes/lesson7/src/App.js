import "./App.css";
import { Routes, Route } from "react-router-dom";
import Welcome from "./pages/Welcome";
import Products from "./pages/Products";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Clarusway</h1>
        <main>
          <Routes>
            <Route path="/" element={<Welcome />} />
            <Route path="/products" element={<Products />} />
            {/* <Route path="/products" element={<ProductsDetail />} /> */}
          </Routes>
        </main>
      </header>
    </div>
  );
}

export default App;
