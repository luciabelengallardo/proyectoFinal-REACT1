import React, { useState, useEffect } from "react";
import { Movienight } from "../data/Movienight";
import { useNavigate } from "react-router-dom";

const AdminMovies = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [editingMovie, setEditingMovie] = useState(null);
  const navigate = useNavigate();
  const [newMovie, setNewMovie] = useState({
    title: "",
    description: "",
    disponible: true,
    genre: "",
    director: "",
    year: "",
    image: "",
    trailer: "",
  });
  const [showNewMovieForm, setShowNewMovieForm] = useState(false);

  useEffect(() => {
    const storedMovies = localStorage.getItem("movies");
    if (storedMovies) {
      setMovies(JSON.parse(storedMovies));
    } else {
      setMovies(Movienight);
      localStorage.setItem("movies", JSON.stringify(Movienight));
    }
  }, []);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleEdit = (movie) => {
    setEditingMovie({ ...movie });
  };

  const handleSaveEdit = () => {
    const updatedMovies = movies.map((movie) =>
      movie.id === editingMovie.id ? editingMovie : movie
    );
    setMovies(updatedMovies);
    localStorage.setItem("movies", JSON.stringify(updatedMovies));
    setEditingMovie(null);
  };

  const handleDelete = (id) => {
    const updatedMovies = movies.filter((movie) => movie.id !== id);
    setMovies(updatedMovies);
    localStorage.setItem("movies", JSON.stringify(updatedMovies));
  };

  const handleToggleAvailability = (id) => {
    const updatedMovies = movies.map((movie) =>
      movie.id === id ? { ...movie, disponible: !movie.disponible } : movie
    );
    setMovies(updatedMovies);
    localStorage.setItem("movies", JSON.stringify(updatedMovies));
  };

  const handleAddMovie = () => {
    const newId = Date.now();
    const movieToAdd = {
      ...newMovie,
      id: newId,
      rank: movies.length + 1,
    };
    const updatedMovies = [...movies, movieToAdd];
    setMovies(updatedMovies);
    localStorage.setItem("movies", JSON.stringify(updatedMovies));
    setNewMovie({
      title: "",
      description: "",
      disponible: true,
      genre: "",
      director: "",
      year: "",
      image: "",
      trailer: "",
    });
    setShowNewMovieForm(false);
    navigate("/admin");
  };

  return (
    <>
      <div className="p-6 text-center d-flex flex-column">
        <div className="d-flex mx-2 my-3 justify-content-space-between">
          <div className="mb-6">
            <button
              type="button"
              className="btn btn-warning"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              ➕ Nuevo
            </button>
          </div>

          <div className="mx-3">
            <input
              type="text"
              placeholder="Buscar película..."
              className=" btn btn-outline-secondary py-2 border rounded"
              value={searchTerm}
              onChange={handleSearch}
            />
          </div>
        </div>

        <div className="">
          <table className="bg-light">
            <thead className="bg-secondary-subtle">
              <tr>
                <th className="p-4 text-left">Código</th>
                <th className="p-4 text-left">Nombre</th>
                <th className="p-4 text-left">Categoría</th>
                <th className="p-4 text-left">Descripción</th>
                <th className="p-4 text-left">Publicado</th>
                <th className="p-4 text-left">Opciones</th>
              </tr>
            </thead>
            <tbody>
              {filteredMovies.flat().map((movie) => (
                <tr key={movie.id} className="border-t">
                  {editingMovie && editingMovie.id === movie.id ? (
                    <>
                      <td className="p-4">{movie.id}</td>
                      <td className="p-4">
                        <input
                          type="text"
                          value={editingMovie.title}
                          onChange={(e) =>
                            setEditingMovie({
                              ...editingMovie,
                              title: e.target.value,
                            })
                          }
                          className="border rounded p-1"
                        />
                      </td>
                      <td className="p-4">
                        <input
                          type="text"
                          value={editingMovie.genre}
                          onChange={(e) =>
                            setEditingMovie({
                              ...editingMovie,
                              genre: e.target.value,
                            })
                          }
                          className="border rounded p-1"
                        />
                      </td>
                      <td className="p-4">
                        <input
                          type="text"
                          value={editingMovie.description}
                          onChange={(e) =>
                            setEditingMovie({
                              ...editingMovie,
                              description: e.target.value,
                            })
                          }
                          className="border rounded p-1"
                        />
                      </td>
                      <td className="p-4">
                        <input
                          type="checkbox"
                          checked={editingMovie.disponible}
                          onChange={(e) =>
                            setEditingMovie({
                              ...editingMovie,
                              disponible: e.target.checked,
                            })
                          }
                        />
                      </td>
                      <td className="p-4">
                        <button onClick={handleSaveEdit} className="">
                          💾 Guardar
                        </button>
                      </td>
                    </>
                  ) : (
                    <>
                      <td className="p-4">{movie.id}</td>
                      <td className="p-4">{movie.title}</td>
                      <td className="p-4">
                        {Array.isArray(movie.genre)
                          ? movie.genre.join(", ")
                          : movie.genre}
                      </td>
                      <td className="p-4">{movie.description}</td>
                      <td className="p-4">
                        <input
                          type="checkbox"
                          checked={movie.disponible}
                          onChange={() => handleToggleAvailability(movie.id)}
                        />
                      </td>
                      <td className="p-4 space-x-2">
                        <button
                          onClick={() => handleDelete(movie.id)}
                          className="text-red-600 hover:text-red-800"
                        >
                          🗑️
                        </button>
                        <button
                          onClick={() => handleEdit(movie)}
                          className="text-blue-600 hover:text-blue-800"
                        >
                          ✏️
                        </button>
                        <button
                          onClick={() => handleToggleAvailability(movie.id)}
                          className="text-yellow-600 hover:text-yellow-800"
                        >
                          ⭐
                        </button>
                      </td>
                    </>
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div
          className="modal fade"
          id="exampleModal"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                  <div className="bg-white p-6 rounded-lg w-96">
                    <h2 className="text-xl font-bold mb-4">
                      Agregar Nueva Película
                    </h2>
                    <div className="">
                      <input
                        type="text"
                        placeholder="Título"
                        className="my-2 p-2 border rounded"
                        value={newMovie.title}
                        onChange={(e) =>
                          setNewMovie({ ...newMovie, title: e.target.value })
                        }
                      />
                      <input
                        type="text"
                        placeholder="Descripción"
                        className="my-2 mx-2 p-2 border rounded"
                        value={newMovie.description}
                        onChange={(e) =>
                          setNewMovie({
                            ...newMovie,
                            description: e.target.value,
                          })
                        }
                      />
                      <input
                        type="text"
                        placeholder="Género"
                        className="my-2 p-2 border rounded"
                        value={newMovie.genre}
                        onChange={(e) =>
                          setNewMovie({ ...newMovie, genre: e.target.value })
                        }
                      />
                      <input
                        type="number"
                        placeholder="Año"
                        className="mx-2 p-2 border rounded"
                        value={newMovie.year}
                        onChange={(e) =>
                          setNewMovie({ ...newMovie, year: e.target.value })
                        }
                      />
                      <div className="my-3">
                        <button
                          onClick={handleAddMovie}
                          className=" px-4 py-2 rounded"
                        >
                          💾 Guardar
                        </button>
                        <button
                          onClick={() => setShowNewMovieForm(false)}
                          className="mx-2 px-4 py-2 rounded"
                        >
                          ❌ Cancelar
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminMovies;
