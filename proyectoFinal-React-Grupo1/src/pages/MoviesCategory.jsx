import React, { useEffect, useState } from "react";
// import "../helpers/moviesApp.js";
// import { getMovies } from "../helpers/moviesApp";
import movieList from "../data/movies-1.json";

function MoviesCategory() {
  // const [movies, setMovies] = useState(null);
  // console.log(movies);

  // useEffect(() => {
  //   traerPeliculas();
  // }, []);

  // const traerPeliculas = async () => {
  //   const { data } = await getMovies();
  //   setMovies(data);
  // };

  const nuevoArreglo = movieList.filter((movie) => {
    return movie.rank;
  });

  return (
    <>
      <div className="container text-white">
        {/* {movies ? (
          <div className="text-center">
            <img src="" alt="" />
          </div>
        ) : (
          <div className="text-center">
            <h3>Pelicula no disponible</h3>
          </div>
        )} */}

        <div className="text-white">
          <div>
            <button>PLAY</button>
            <button>TRAILER</button>
            <button>+</button>
          </div>
          <p>1999 - Comedia, Familia, Aventura</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas fugiat
            incidunt veritatis obcaecati corrupti dolorem facilis quasi quisquam
            delectus
          </p>
          <button>Volver</button>
        </div>
      </div>
    </>
  );
}

export default MoviesCategory;
