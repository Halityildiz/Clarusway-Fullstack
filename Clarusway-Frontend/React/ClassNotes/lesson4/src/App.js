import "./App.css";

import { useState } from "react";
import TestComponent from "./TestComponent";

function App() {
  const [isVisible, setIsvisible] = useState(true);
  return (
    <div className="App">
      <h1>Clarusway</h1>
      {isVisible ? <TestComponent surname="green" /> : null}
      <button onClick={() => setIsvisible(!isVisible)}>unmount</button>
    </div>
  );
}

export default App;
