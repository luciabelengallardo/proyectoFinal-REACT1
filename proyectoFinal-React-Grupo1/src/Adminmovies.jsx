import React, { useState } from "react";
import { Movienight } from "./Movienight";

const AdminMovies = () => {
  const [selectedMovie, setSelectedMovie] = useState(null);

  const handleDetails = (movie) => {
    setSelectedMovie(movie);
  };

  const closeDetails = () => {
    setSelectedMovie(null);
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>Administrar Películas</h1>
      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr style={{ background: "#333", color: "#fff" }}>
            <th style={{ padding: "10px", border: "1px solid #ddd" }}>Rank</th>
            <th style={{ padding: "10px", border: "1px solid #ddd" }}>Título</th>
            <th style={{ padding: "10px", border: "1px solid #ddd" }}>Año</th>
            <th style={{ padding: "10px", border: "1px solid #ddd" }}>Disponible</th>
            <th style={{ padding: "10px", border: "1px solid #ddd" }}>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {Movienight.map((movie) => (
            <tr key={movie.id}>
              <td style={{ padding: "10px", border: "1px solid #ddd" }}>{movie.rank}</td>
              <td style={{ padding: "10px", border: "1px solid #ddd" }}>{movie.title}</td>
              <td style={{ padding: "10px", border: "1px solid #ddd" }}>{movie.year}</td>
              <td style={{ padding: "10px", border: "1px solid #ddd" }}>
                {movie.disponible ? "Sí" : "No"}
              </td>
              <td style={{ padding: "10px", border: "1px solid #ddd" }}>
                <button
                  onClick={() => handleDetails(movie)}
                  style={{
                    background: "#007BFF",
                    color: "#fff",
                    padding: "5px 10px",
                    border: "none",
                    cursor: "pointer",
                    borderRadius: "4px",
                  }}
                >
                  Ver Detalles
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {selectedMovie && (
        <div
          style={{
            marginTop: "20px",
            padding: "20px",
            background: "#f9f9f9",
            border: "1px solid #ddd",
            borderRadius: "8px",
          }}
        >
          <h2>{selectedMovie.title}</h2>
          <img
            src={selectedMovie.image}
            alt={selectedMovie.title}
            style={{ width: "200px", marginBottom: "10px" }}
          />
          <p><strong>Año:</strong> {selectedMovie.year}</p>
          <p><strong>Género:</strong> {selectedMovie.genre.join(", ")}</p>
          <p><strong>Director:</strong> {selectedMovie.director.join(", ")}</p>
          <p><strong>Descripción:</strong> {selectedMovie.description}</p>
          <iframe
            width="560"
            height="315"
            src={selectedMovie.trailer}
            title={selectedMovie.title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{ marginTop: "10px" }}
          ></iframe>
          <br />
          <button
            onClick={closeDetails}
            style={{
              marginTop: "10px",
              background: "#DC3545",
              color: "#fff",
              padding: "5px 10px",
              border: "none",
              cursor: "pointer",
              borderRadius: "4px",
            }}
          >
            Cerrar
          </button>
        </div>
      )}
    </div>
  );
};

export default AdminMovies;