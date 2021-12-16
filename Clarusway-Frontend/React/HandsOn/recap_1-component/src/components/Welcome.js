import React from "react";

const Welcome = (props) => {
  const { name, img } = props;
  return (
    <div>
      <h2>Welcome to {name} pages </h2>
      <img src={img} alt="" />
    </div>
  );
};

export default Welcome;
