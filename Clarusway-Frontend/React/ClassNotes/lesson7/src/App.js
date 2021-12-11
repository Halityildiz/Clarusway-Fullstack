import "./App.css";
import { Routes, Route } from "react-router-dom";
import Welcome from "./pages/Welcome";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import MainHeader from "./components/MainHeader";

function App() {
  return (
    <div className="App">
      <MainHeader />
      <h1>Clarusway</h1>
      <main>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/welcome/*" element={<Welcome />}>
            <Route path="new-user" new element={<p>Welcome new user!</p>} />
          </Route>
          <Route path="/products" element={<Products />} />
          <Route path="/productDetail/:productId" element={<ProductDetail />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
