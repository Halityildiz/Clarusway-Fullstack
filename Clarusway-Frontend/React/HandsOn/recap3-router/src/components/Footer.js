import React from "react";
import altlogo from "../img/Hospital Logo.png";
const Footer = () => {
  return (
    <footer
      className="text-center bg-dark p-2"
      style={{ marginTop: "30px", borderTop: "6px solid #a2c6fd" }}
    >
      <img src={altlogo} alt="Logo" class="logo" />
      <p className="text-light mt-0">Copyright &#169; 2022</p>
    </footer>
  );
};

export default Footer;
