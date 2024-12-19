import React from 'react'
//import homeScreen from "../data/movies-1.json"
import "bootstrap/dist/css/bootstrap.min.css";


function HomeScreen() {
 // console.log(homeScreen);
 // const nuevoArreglo = homeScreen.filter((movie)=>{
 //   return movie.rank;
 // });
  
  return (
    <>
    <div className="carouselDestacadas" >
      <h3>Peliculas</h3>
      <div id="movieCarousel" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          {/* Agrega las imágenes de las películas dentro del carrusel */}
          <div className="carousel-item active">
            <img
              className="d-block w-100"
              src="https://via.placeholder.com/800x400?text=Película+1"
              alt="Película 1"
            />
          </div>
          <div className="carousel-item">
            <img
              className="d-block w-100"
              src="https://via.placeholder.com/800x400?text=Película+2"
              alt="Película 2"
            />
          </div>
          <div className="carousel-item">
            <img
              className="d-block w-100"
              src="https://via.placeholder.com/800x400?text=Película+3"
              alt="Película 3"
            />
          </div>
        </div>
        {/* Controles de navegación del carrusel */}
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#movieCarousel"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#movieCarousel"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <div className="container mt-4">
        <h4>Categorías</h4>
        <div className="row">
          {/* Card 1 */}
          <div className="col-2">
            <div className="card">
              <img src="https://via.placeholder.com/400x200?text=Acción" className="card-img-top" alt="Acción" />
              <div className="card-body">
                <h5 className="card-title">Acción</h5>
                <p className="card-text">Películas llenas de emoción y adrenalina.</p>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="col-2">
            <div className="card">
              <img src="https://via.placeholder.com/400x200?text=Aventura" className="card-img-top" alt="Aventura" />
              <div className="card-body">
                <h5 className="card-title">Aventura</h5>
                <p className="card-text">Exploraciones y viajes emocionantes.</p>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="col-2">
            <div className="card">
              <img src="https://via.placeholder.com/400x200?text=Comedia" className="card-img-top" alt="Comedia" />
              <div className="card-body">
                <h5 className="card-title">Comedia</h5>
                <p className="card-text">Películas divertidas para relajarte.</p>
              </div>
            </div>
          </div>

          {/* Card 4 */}
          <div className="col-2">
            <div className="card">
              <img src="https://via.placeholder.com/400x200?text=Drama" className="card-img-top" alt="Drama" />
              <div className="card-body">
                <h5 className="card-title">Drama</h5>
                <p className="card-text">Historias profundas y conmovedoras.</p>
              </div>
            </div>
          </div>

          {/* Card 5 */}
          <div className="col-2">
            <div className="card">
              <img src="https://via.placeholder.com/400x200?text=Fantasía" className="card-img-top" alt="Fantasía" />
              <div className="card-body">
                <h5 className="card-title">Fantasía</h5>
                <p className="card-text">Mundos mágicos e imaginativos.</p>
              </div>
            </div>
          </div>

          {/* Card 6 */}
          <div className="col-2">
            <div className="card">
              <img src="https://via.placeholder.com/400x200?text=Romántica" className="card-img-top" alt="Romántica" />
              <div className="card-body">
                <h5 className="card-title">Romántica</h5>
                <p className="card-text">Historias de amor y pasión.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
    </>
  );
}

export default HomeScreen;