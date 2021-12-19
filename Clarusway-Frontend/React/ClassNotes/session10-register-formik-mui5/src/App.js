import "./App.css";
import Register from "./pages/Register";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../src/Login";

function App() {
  return (
    <BrowserRouter>
      <Register />
      <Routes>
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
