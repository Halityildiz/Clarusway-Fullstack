import React from "react";
import Button from "../components/Button";
import Welcome from "../components/Welcome";
import headerImg from "../img/headers.jpg";

const Header = () => {
  const handleClick = () => {
    alert("Header Sayfasinin detaylarina yonlendiriliyorsunuz!");
  };

  return (
    <div>
      <h1>Header</h1>
      <Welcome name="Header" img={headerImg} />
      <Button click={handleClick} color="white" bgColor="black" />
    </div>
  );
};

export default Header;
