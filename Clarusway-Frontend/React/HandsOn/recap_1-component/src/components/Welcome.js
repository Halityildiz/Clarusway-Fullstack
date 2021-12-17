import React from "react";
const imgStyle = {
  width: "300px",
  borderRadius: "50px",
};
const Welcome = (props) => {
  const { name, img } = props;
  return (
    <div>
      <h2>Welcome to {name} pages </h2>
      <img src={img} alt={name} style={imgStyle} />
    </div>
  );
};

export default Welcome;
