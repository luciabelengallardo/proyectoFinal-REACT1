const url =
  "https://api.themoviedb.org/3/movie/popular?api_key=cc1339e4b597939f9c1f5d3b4f717888&language=es-ES";

export const getMovies = async () => {
  try {
    const peliculas = await fetch(`${url}`);
    console.log(peliculas);

    if (peliculas.status === 200) {
      const data = await peliculas.json();
      data.results.forEach((pelicula) => {
        console.log(pelicula.title);
      });
    } else if (peliculas.status === 401) {
      console.log("Pusiste mal la key");
    } else if (peliculas.status === 404) {
      console.log("La pelicula que buscas no existe");
    } else {
      console.log("Hubo un error y no sabemos que paso");
    }
  } catch (error) {
    console.log(error);
  }
};

getMovies();

let limite = 10;

// export const getMovies = async () => {
//   const peliculas = await fetch(`${url}`);
//   const data = await peliculas.json();
//   return data;
// };
// getMovies().then((respuesta) => console.log(respuesta));
