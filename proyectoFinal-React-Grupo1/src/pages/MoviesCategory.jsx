import React, { useEffect, useState } from "react";
import "../helpers/moviesApp.js";
import { getMovies } from "../helpers/moviesApp";

function MoviesCategory() {
  const [movies, setMovies] = useState(null);
  console.log(movies);

  useEffect(() => {
    traerPeliculas();
  }, []);

  const traerPeliculas = async () => {
    const { data } = await getMovies();
    setMovies(data);
  };

  return (
    <>
      <div className="text-white">
        <div className="container">
          <img src="" alt="" />
        </div>
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
    </>
  );
}

export default MoviesCategory;
