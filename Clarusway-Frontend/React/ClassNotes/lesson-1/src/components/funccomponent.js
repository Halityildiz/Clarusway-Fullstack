import { useState } from "react";

function FuncComp({ old, color }) {
  const [counter, setCounter] = useState(0);
  const incCounter = () => {
    setCounter(counter + 1);
  };
  const decCounter = () => {
    setCounter(counter - 1);
  };
  // const old = myprops.old;
  // const { old } = myprops;
  return (
    <div>
      <h1>Welcome to React JS from functional component</h1>
      <p> Age: {old}</p>
      {/* <p> Age: {old}</p> */}
      <p> Color: {color.toUpperCase()}</p>
      {/* <p> Age: {old}</p> */}
      <p>Counter : {counter}</p>
      <button onClick={incCounter}>Increase</button>
      <button onClick={decCounter}>Decrease</button>
    </div>
  );
}

export default FuncComp;
