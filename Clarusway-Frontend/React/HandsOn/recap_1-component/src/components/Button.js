import React from "react";
const btnStyle = {
  // color: "white",
  // backgroundColor: "red",
  padding: "20px",
  fontSize: "30px",
  borderRadius: "20px",
};
const Button = (props) => {
  const { onClick, name, color, bgColor } = props;
  // const handleClick = () => {
  //   alert("Sayfayi yonlendiriliyorsunuz!");
  // };
  return (
    <div>
      <button
        style={{ ...btnStyle, color: color, background: bgColor }}
        onClick={onClick}
      >
        {name}
      </button>
    </div>
  );
};

export default Button;
