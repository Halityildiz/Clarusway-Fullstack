import React from "react";
import { Carousel } from "react-bootstrap";
import devops from "../img/2.jpg";
import about from "../img/6.jpg";
import isa from "../img/7.jpg";
import cocuk from "../img/1.jpg";
import hasta from "../img/8.jpg";

const Slider = () => {
  return (
    <div>
      <Carousel fade autoPlay={true} interval={2000}>
        <Carousel.Item>
          <img className="d-block w-100" src={devops} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100 h-25" src={about} alt="Second slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100 h-25" src={isa} alt="Third slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100 h-25" src={cocuk} alt="Third slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100 h-25" src={hasta} alt="Third slide" />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Slider;
