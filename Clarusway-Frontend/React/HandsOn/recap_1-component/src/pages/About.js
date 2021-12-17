import React from "react";
import Button from "../components/Button";
import Welcome from "../components/Welcome";
import aboutImg from "../img/about.jpg";

const About = () => {
  const handleClick = () => {
    alert("About sayfasinin derinliklerine ilerliyoruz!");
  };
  return (
    <div>
      <h1>About</h1>
      <Welcome name="About" img={aboutImg} />
      <Button name="About" onClick={handleClick} color="white" bgColor="red" />
    </div>
  );
};

export default About;
