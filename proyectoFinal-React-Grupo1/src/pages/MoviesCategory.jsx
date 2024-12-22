import React from "react";
import movieList from "../data/movies-1.json";
import { useParams } from "react-router-dom";
import "../css/moviescategory.css";

console.log(movieList);

function MoviesCategory({ movie }) {
  const { id } = useParams();

  return (
    <>
      <div className="container text-white">
        {movieList.map((movie) => (
          <div key={movie.id} className="text-center contenedor-img">
            {/* <img src={movie.image} alt={movie.title} /> */}
            <div className={`movie bg movie-bg-${movie.id}`}>
              <div className="text-white">
                <div className="text-overlay">
                  <button>PLAY</button>
                  <button>TRAILER</button>
                  <button>+</button>
                </div>
                <p>
                  {movie.year} - {movie.genre}
                </p>
                <p>{movie.description}</p>
              </div>
              <button>Volver</button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default MoviesCategory;
