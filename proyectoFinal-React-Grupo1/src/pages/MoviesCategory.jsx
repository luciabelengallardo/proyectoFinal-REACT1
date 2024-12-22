import React from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { Movienight } from "../data/Movienight";
import "../css/moviescategory.css";

const MoviesCategory = () => {
  const { id } = useParams();
  const movie = Movienight.find((movie) => movie.id === id);
  const navigate = useNavigate();

  if (!movie) {
    return <div>Movie not found</div>;
  }

  return (
    <div className="movie-container">
      <div
        className="bg-img"
        style={{ backgroundImage: `url(${movie.image})` }}
      >
        <div className="gradient"></div>
        <div className="content">
          <div className="title-logo">
            <h2>{movie.title}</h2>
          </div>

          <div className="movie-info">
            <div className="button-container">
              <Link to="/play">
                <button className="play-button">
                  <span className="mx-1">▶</span> PLAY
                </button>
              </Link>
              <Link to="/trailer">
                <button className="trailer-button">
                  <span className="mx-1">▶</span> TRAILER
                </button>
              </Link>
              <Link to="/favorites">
                <button className="add-button">+</button>
              </Link>
            </div>

            <div className="movie-details m-2">
              <span>{movie.year}</span>
              <span className="m-1">•</span>
              <span>
                {Array.isArray(movie.genre)
                  ? movie.genre.join(", ")
                  : movie.genre}
              </span>
            </div>

            <p className="movie-description mt-2">{movie.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoviesCategory;
