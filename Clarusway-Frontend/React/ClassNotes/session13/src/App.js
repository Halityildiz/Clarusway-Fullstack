import UseRefComponent from "./components/UseRefComponent";

import React from "react";
import Header from "./components/Header";

function App() {
  const [count, setCount] = useState(initialState);
  return (
    <div className="App">
      {/* <UseRefComponent /> */}
      <Header />
      <button onClick={increase}>Increase</button>
    </div>
  );
}

export default App;
