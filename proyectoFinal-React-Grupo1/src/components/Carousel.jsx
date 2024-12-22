import React from "react";
import "/src/css/carousel.css";
// import { Carousel } from "react-bootstrap";

function CarouselPeliculas() {
  return <div></div>;
}

function CarouselCustom({ titulo }) {
  return (
    <div className="carouselCustom container">
      <h1>{titulo}</h1>

      {/* <Carousel></Carousel> */}
    </div>
  );
}

export default CarouselCustom;
