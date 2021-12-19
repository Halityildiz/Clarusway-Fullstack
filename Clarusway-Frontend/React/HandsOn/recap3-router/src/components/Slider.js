import React from "react";
import { Carousel } from "react-bootstrap";
import dogum from "../img/2.jpg";
import doktor from "../img/6.jpg";
import psiko from "../img/psiko2.jpg";
import cocuk from "../img/ortopedi.jpg";
import hasta from "../img/hasta2.jpg";

const Slider = () => {
  return (
    <div
      style={{
        borderBottom: "5px solid #a2c6fd",
      }}
    >
      <Carousel fade autoPlay={true} interval={2000}>
        <Carousel.Item>
          <img className="d-block w-100" src={dogum} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100 h-25" src={hasta} alt="Third slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100 h-25" src={psiko} alt="Third slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100 h-25" src={cocuk} alt="Third slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100 h-25" src={doktor} alt="Second slide" />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Slider;
