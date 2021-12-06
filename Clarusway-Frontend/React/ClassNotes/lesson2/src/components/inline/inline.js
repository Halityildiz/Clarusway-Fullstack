import React from "react";
import { myStyles } from "./styles";

// const myStyles = {
//   paragraf: {
//     color: "blue",
//     fontSize: "1.2rem",
//     fontWeight: "bolder",
//   },
//   secondDiv: {
//     backgroundColor: "#b0b0b0",
//     padding: "1rem 10px",
//   },
// };

const Inline = () => {
  return (
    <div style={{ backgroundColor: "red", color: "#fff" }}>
      <h1 style={{ backgroundColor: "yellow", color: "#222" }}>
        Hello from inline component
      </h1>
      <p style={myStyles.paragraf}>Inline styling in react</p>
      <div style={myStyles.secondDiv}>
        <p>Second Div</p>
      </div>
    </div>
  );
};
export default Inline;
