import React from "react";
import Button from "../components/Button";
import Welcome from "../components/Welcome";
import aboutImg from "../img/about.jpg";

const About = () => {
  const handleClick = () => {
    alert("about sayfasinin derinliklerine saliyorsun!");
  };
  return (
    <div>
      <h1>About</h1>
      <Welcome name="About" img={aboutImg} />
      <Button name="header" click={handleClick} color="white" />
    </div>
  );
};

export default About;
