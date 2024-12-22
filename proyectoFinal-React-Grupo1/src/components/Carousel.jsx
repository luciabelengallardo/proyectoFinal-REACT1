import React from "react";
import "/src/css/carousel.css";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function CarouselCustom({ titulo }) {
  return (
    <div className="carouselCustom container">
      <h1>{titulo}</h1>

      <Carousel interval={null}>
        <Carousel.Item>
          <div className="d-block w-100">
            <img src="/src/img/carousel1.jpg" alt="First slide" />
            <img src="/src/img/carousel1.jpg" alt="First slide" />
            <img src="/src/img/carousel1.jpg" alt="First slide" />
            <img src="/src/img/carousel1.jpg" alt="First slide" />
            <img src="/src/img/carousel1.jpg" alt="First slide" />
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="d-block w-100">
            <img src="/src/img/carousel1.jpg" alt="First slide" />
            <img src="/src/img/carousel1.jpg" alt="First slide" />
            <img src="/src/img/carousel1.jpg" alt="First slide" />
            <img src="/src/img/carousel1.jpg" alt="First slide" />
            <img src="/src/img/carousel1.jpg" alt="First slide" />
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default CarouselCustom;
