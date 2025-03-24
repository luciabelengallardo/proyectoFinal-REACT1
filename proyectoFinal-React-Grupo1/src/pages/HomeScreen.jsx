import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from "../components/Carousel";
import { Movienight } from "../data/Movienight";
import { Link } from "react-router-dom";

function HomeScreen() {
  const [movies, setMovies] = useState([]);

  const loadMovies = () => {
    const storedMovies = localStorage.getItem("movies");
    if (storedMovies) {
      try {
        const parsedMovies = JSON.parse(storedMovies);
        if (Array.isArray(parsedMovies)) {
          setMovies(parsedMovies);
          console.log("Películas cargadas desde localStorage:", parsedMovies);
        } else {
          console.error("Los datos en localStorage no son válidos.");
          setMovies(Movienight);
        }
      } catch (error) {
        console.error("Error al parsear los datos de localStorage:", error);
        setMovies(Movienight);
      }
    } else {
      console.warn("No hay películas guardadas en localStorage.");
      setMovies(Movienight);
    }
  };

  useEffect(() => {
    loadMovies();

    const handleStorageChange = (event) => {
      if (event.key === "movies") {
        loadMovies();
      }
    };

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  const array1 = movies.slice(0, 30);
  const array2 = movies.slice(30, 60);
  const array3 = movies.slice(60, 80);
  const array4 = movies.slice(80, 100);

  return (
    <>
      <div className="carouselDestacadas">
        <Link to="/error404">
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
          </div>
        </Link>
        <Link to="/error404">
          <div className="container  mt-4" id="categorias">
            <div className="row">
              <div className="col-2">
                <div className="card">
                  <img
                    src="https://mkwiecien00.github.io/disney-plus-clone/assets/disney-vv8h4tT8.jpg"
                    className="card-img-top"
                    alt="Acción"
                  />
                </div>
              </div>

              <div className="col-2">
                <div className="card">
                  <img
                    src="https://mkwiecien00.github.io/disney-plus-clone/assets/pixar-jXfep6Jc.jpg"
                    className="card-img-top"
                    alt="Aventura"
                  />
                </div>
              </div>

              <div className="col-2">
                <div className="card">
                  <img
                    src="https://mkwiecien00.github.io/disney-plus-clone/assets/marvel-U-4dq8Yw.jpg"
                    className="card-img-top"
                    alt="Comedia"
                  />
                </div>
              </div>

              <div className="col-2">
                <div className="card">
                  <img
                    src="https://mkwiecien00.github.io/disney-plus-clone/assets/starwars-KsEV6PSt.jpg"
                    className="card-img-top"
                    alt="Drama"
                  />
                </div>
              </div>

              <div className="col-2">
                <div className="card">
                  <img
                    src="https://mkwiecien00.github.io/disney-plus-clone/assets/national-geographic-zll0PvSe.jpg"
                    className="card-img-top"
                    alt="Fantasía"
                  />
                </div>
              </div>

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
        </Link>
      </div>

      {movies.length > 0 ? (
        <>
          <Carousel titulo={"Comedia"} items={array1} />
          <Carousel titulo={"Accion"} items={array2} />
          <Carousel titulo={"Drama"} items={array3} />
          <Carousel titulo={"Lo mas reciente"} items={array4} />
        </>
      ) : (
        <p className="text-center mt-4">No hay películas disponibles.</p>
      )}
    </>
  );
}

export default HomeScreen;
