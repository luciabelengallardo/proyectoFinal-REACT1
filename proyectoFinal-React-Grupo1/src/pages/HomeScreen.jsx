import React, { useState } from 'react'
//import homeScreen from "../data/movies-1.json"
import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from '../components/Carousel';
import { Movienight } from "../data/Movienight";


function HomeScreen() {
 // console.log(homeScreen);
 // const nuevoArreglo = homeScreen.filter((movie)=>{
 //   return movie.rank;
 // });
  const [peliculas, setPeliculas]= useState(Movienight)
  return (
    <>
    <div className="carouselDestacadas" >
      <div id="movieCarousel" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              className="d-block w-100"
              src="/src/img/carousel1.jpg"
              alt="Película 1"
            />
          </div>
          <div className="carousel-item">
            <img
              className="d-block w-100"
              src="/src/img/carousel2.jpg"
              alt="Película 2"
            />
          </div>
          <div className="carousel-item">
            <img
              className="d-block w-100"
              src="/src/img/carousel3.jpg"
              alt="Película 3"
            />
          </div>
          <div className="carousel-item">
            <img
              className="d-block w-100"
              src="/src/img/carousel4.jpg"
              alt="Película 4"
            />
          </div>
        </div>
        {/* Controles de navegación del carrusel */}


      </div>
      <div className="container  mt-4" id='categorias'>
        <div className="row">
          {/* Card 1 */}
          <div className="col-2">
            <div className="card">
              <img src="https://mkwiecien00.github.io/disney-plus-clone/assets/disney-vv8h4tT8.jpg" className="card-img-top" alt="Acción" />

            </div>
          </div>

            {/* Card 2 */}
            <div className="col-2">
              <div className="card">
                <img
                  src="https://mkwiecien00.github.io/disney-plus-clone/assets/pixar-jXfep6Jc.jpg"
                  className="card-img-top"
                  alt="Aventura"
                />
              </div>
            </div>

            {/* Card 3 */}
            <div className="col-2">
              <div className="card">
                <img
                  src="https://mkwiecien00.github.io/disney-plus-clone/assets/marvel-U-4dq8Yw.jpg"
                  className="card-img-top"
                  alt="Comedia"
                />
              </div>
            </div>

            {/* Card 4 */}
            <div className="col-2">
              <div className="card">
                <img
                  src="https://mkwiecien00.github.io/disney-plus-clone/assets/starwars-KsEV6PSt.jpg"
                  className="card-img-top"
                  alt="Drama"
                />
              </div>
            </div>

            {/* Card 5 */}
            <div className="col-2">
              <div className="card">
                <img
                  src="https://mkwiecien00.github.io/disney-plus-clone/assets/national-geographic-zll0PvSe.jpg"
                  className="card-img-top"
                  alt="Fantasía"
                />
              </div>
            </div>

            {/* Card 6 */}
            <div className="col-2">
              <div className="card">
                <img
                  src="https://mkwiecien00.github.io/disney-plus-clone/assets/star-L89nWIK3.jpg"
                  className="card-img-top"
                  alt="Romántica"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

    <Carousel titulo={"Popular Movies"} items={peliculas}/>
    <Carousel titulo={"Popular Series"} items={peliculas}/>

    </>
  );
}

export default HomeScreen;
