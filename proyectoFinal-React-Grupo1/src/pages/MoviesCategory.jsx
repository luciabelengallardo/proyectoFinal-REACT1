import React from "react";
import movieList from "../data/movies-1.json";

console.log(movieList);

function MoviesCategory() {
  return (
    <>
      <div className="container text-white">
        {movieList.map((movie) => (
          <div key={movie.id} className="text-center">
            <img src={movie.image} alt={movie.title} />
            <div className="text-white">
              <div>
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
        ))}
      </div>
    </>
  );
}

export default MoviesCategory;
