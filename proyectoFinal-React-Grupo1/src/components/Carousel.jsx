import React, { useEffect, useState } from "react";
import "/src/css/carousel.css";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function CarouselCustom({ titulo, items }) {
  const [peliculas, setPeliculas] = useState([]);

  const agruparItems = (lista, numero) => {
    const grupo = [];
    for (let i = 0; i < lista.length; i += numero) {
      grupo.push(lista.slice(i, i + numero));
    }
    return grupo;
  };

  const fetchItems = async () => {
    setPeliculas(agruparItems(items.filter(i => i.disponible), 5));
  };

  useEffect(() => {
    fetchItems();
  }, []);
  return (
    <div className="carouselCustom container">
      <h1>{titulo}</h1>

      <Carousel interval={null}>
        {peliculas.map((listado, index) => {
            
          return (
            <Carousel.Item key={index}>
              <div className="d-block w-100">
                {listado.map((pelicula) => {
                  return ( <img key={pelicula.rank} src={pelicula.image} alt={pelicula.title} />)
                })}
              </div>
            </Carousel.Item>
          )
        })}
      </Carousel>
    </div>
  );
}

export default CarouselCustom;
