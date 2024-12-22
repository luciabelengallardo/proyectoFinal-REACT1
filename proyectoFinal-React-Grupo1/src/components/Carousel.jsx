import React from "react";
import "/src/css/carousel.css";
import { Carousel } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css'



function CarouselCustom({ titulo }) {
  return (
    <div className="carouselCustom container">
      <h1>{titulo}</h1>

       <Carousel>
       <Carousel.Item>
        <img
          className="d-block w-100"
          src="/src/img/carousel1.jpg"
          alt="First slide"
        />
        

        
      </Carousel.Item>

        </Carousel> 
    </div>
  );
}

export default CarouselCustom;
