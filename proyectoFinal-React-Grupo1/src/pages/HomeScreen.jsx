import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from "../components/Carousel";
import { Movienight } from "../data/Movienight";
import { useNavigate } from "react-router-dom";


function HomeScreen() {
  const [peliculas, setPeliculas] = useState(Movienight);
  const navigate = useNavigate();


  return (
    <>
      <div className="carouselDestacadas" onClick={() => navigate("/error404")}>
        <div
          id="movieCarousel"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                className="d-block w-100"
                src="https://mkwiecien00.github.io/disney-plus-clone/assets/imgslide-1-ZuWvtr9m.jpg"
                alt="Película 1"
              />
            </div>
            <div className="carousel-item">
              <img
                className="d-block w-100"
                src="https://mkwiecien00.github.io/disney-plus-clone/assets/imgslide-2-53IU4WjP.jpg"
                alt="Película 2"
              />
            </div>
            <div className="carousel-item">
              <img
                className="d-block w-100"
                src="https://mkwiecien00.github.io/disney-plus-clone/assets/imgslide-4-nvIPWDMu.jpg"
                alt="Película 3"
              />
            </div>
            <div className="carousel-item">
              <img
                className="d-block w-100"
                src="https://mkwiecien00.github.io/disney-plus-clone/assets/imgslide-3-dNgqt1xN.jpg"
                alt="Película 4"
              />
            </div>
          </div>
          {/* Controles de navegación del carrusel */}
        </div>
        <div className="container  mt-4" id="categorias">
          <div className="row">
            {/* Card 1 */}
            <div className="col-2" onClick={() => navigate("/error404")}>
              <div className="card">
                <img
                  src="https://mkwiecien00.github.io/disney-plus-clone/assets/disney-vv8h4tT8.jpg"
                  className="card-img-top"
                  alt="Acción"
                />
              </div>
            </div>

            {/* Card 2 */}
            <div className="col-2" onClick={() => navigate("/error404")}>
              <div className="card">
                <img
                  src="https://mkwiecien00.github.io/disney-plus-clone/assets/pixar-jXfep6Jc.jpg"
                  className="card-img-top"
                  alt="Aventura"
                />
              </div>
            </div>

            {/* Card 3 */}
            <div className="col-2" onClick={() => navigate("/error404")}>
              <div className="card">
                <img
                  src="https://mkwiecien00.github.io/disney-plus-clone/assets/marvel-U-4dq8Yw.jpg"
                  className="card-img-top"
                  alt="Comedia"
                />
              </div>
            </div>

            {/* Card 4 */}
            <div className="col-2" onClick={() => navigate("/error404")}>
              <div className="card">
                <img
                  src="https://mkwiecien00.github.io/disney-plus-clone/assets/starwars-KsEV6PSt.jpg"
                  className="card-img-top"
                  alt="Drama"
                />
              </div>
            </div>

            {/* Card 5 */}
            <div className="col-2" onClick={() => navigate("/error404")}>
              <div className="card">
                <img
                  src="https://mkwiecien00.github.io/disney-plus-clone/assets/national-geographic-zll0PvSe.jpg"
                  className="card-img-top"
                  alt="Fantasía"
                />
              </div>
            </div>

            {/* Card 6 */}
            <div className="col-2" onClick={() => navigate("/error404")}>
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

      <Carousel titulo={"Comedia"} items={peliculas[0]} />
      <Carousel titulo={"Accion"} items={peliculas[1]} />
      <Carousel titulo={"Drama"} items={peliculas[2]} />
      <Carousel titulo={"Series"} items={peliculas[3]} />
    </>
  );
}

export default HomeScreen;
