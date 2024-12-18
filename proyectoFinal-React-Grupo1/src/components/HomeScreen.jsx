import React from 'react'
import homeScreen from "../data/movies-1.json"

function HomeScreen() {
 // console.log(homeScreen);
 // const nuevoArreglo = homeScreen.filter((movie)=>{
 //   return movie.rank;
 // });
  
  return (
    <>
    <div>
      <h3>Peliculas</h3>
      <div className='poster'>
        {homeScreen.map((movie)=>(
                  <div className='container-img' key={movie.id}>
                  <img
                  className='movie-grid-image' 
                  src={movie.image} alt={movie.title} />
                  </div>
        ))}

      </div>
    </div>
    </>
  );
}

export default HomeScreen;