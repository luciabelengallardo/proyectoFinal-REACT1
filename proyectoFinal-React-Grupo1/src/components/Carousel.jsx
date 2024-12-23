import React, { useEffect, useState } from "react";
import "/src/css/carousel.css";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";

function CarouselCustom({ titulo, items }) {
  const [peliculas, setPeliculas] = useState([]);
  const [cantItems, setCantItems] = useState(window.innerWidth > 768 ? 5 : 3);
  const [w, setW] = useState();

  const navigate = useNavigate();

  const agruparItems = (lista, numero) => {
    const grupo = [];
    for (let i = 0; i < lista.length; i += numero) {
      grupo.push(lista.slice(i, i + numero));
    }
    return grupo;
  };

  const fetchItems = async () => {
    setPeliculas(
      agruparItems(
        items.filter((i) => i.disponible),
        cantItems
      )
    );
  };

  useEffect(() => {
    window.addEventListener('resize', (e)=>{
        
        setCantItems(window.innerWidth > 768 ? 5 : 3);
        setPeliculas(
            agruparItems(
              items.filter((i) => i.disponible),
              window.innerWidth > 768 ? 5 : 3
            )
          );

  });
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
                  return (
                    <img
                      onClick={() => navigate("/movies/" + pelicula.id)}
                      key={pelicula.rank}
                      src={pelicula.image}
                      alt={pelicula.title}
                    />
                  );
                })}
              </div>
            </Carousel.Item>
          );
        })}
      </Carousel>
    </div>
  );
}

export default CarouselCustom;
