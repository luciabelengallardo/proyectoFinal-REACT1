import React, { useState, useContext } from "react";
import { MovieContext } from "../context/MovieContext";
import { useNavigate } from "react-router-dom";

const AdminMovies = () => {
  const { movies, setMovies } = useContext(MovieContext); // Usa el contexto
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [editingMovie, setEditingMovie] = useState(null);
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

  //BUSCAR PELICULAS

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // EDITAR PELICULA

  const handleEdit = (movie) => {
    setEditingMovie({ ...movie });
  };

  //GUARDAR CAMBIOS

  const handleSaveEdit = () => {
    const updatedMovies = movies.map((movie) =>
      movie.id === editingMovie.id ? editingMovie : movie
    );
    setMovies(updatedMovies);
    setEditingMovie(null);
  };

  //ELIMINAR PELICULA

  const handleDelete = (id) => {
    const updatedMovies = movies.filter((movie) => movie.id !== id);
    setMovies(updatedMovies);
  };

  //CAMBIAR DISPONIBILIDAD

  const handleToggleAvailability = (id) => {
    const updatedMovies = movies.map((movie) =>
      movie.id === id ? { ...movie, disponible: !movie.disponible } : movie
    );
    setMovies(updatedMovies);
  };

  //AGREGAR NUEVA PELICULA

  const handleAddMovie = () => {
    const newId = Date.now().toString();
    const movieToAdd = {
      ...newMovie,
      id: newId,
      rank: movies.length + 1,
    };
    const updatedMovies = [...movies, movieToAdd];
    setMovies(updatedMovies);
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
              onClick={openModal}
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

        <div className="overflow-x-auto bg-white rounded-lg shadow-md">
          <table className="min-w-full">
            <thead className="bg-blue-500 text-dark">
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
              {filteredMovies.map((movie) => (
                <tr key={movie.id} className="border-t hover:bg-gray-50">
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
                          className="border rounded-lg p-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                          className="border rounded-lg p-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                          className="border rounded-lg p-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                          className="form-checkbox h-5 w-5 text-blue-500 rounded focus:ring-2 focus:ring-blue-500"
                        />
                      </td>
                      <td className="p-4">
                        <button
                          onClick={handleSaveEdit}
                          className="bg-green-500 hover:bg-green-600 text-white font-bold py-1 px-3 rounded-lg shadow-md transition duration-300"
                        >
                          💾 Guardar
                        </button>
                      </td>
                    </>
                  ) : (
                    <>
                      <td className="p-4">{movie.rank}</td>
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
                          className="form-checkbox h-5 w-5 text-blue-500 rounded focus:ring-2 focus:ring-blue-500"
                        />
                      </td>
                      <td className="p-4 space-x-2">
                        <button
                          onClick={() => handleDelete(movie.id)}
                          className="bg-red-500 hover:bg-red-600 text-white font-bold py-1 px-3 rounded-lg shadow-md transition duration-300"
                        >
                          🗑️
                        </button>
                        <button
                          onClick={() => handleEdit(movie)}
                          className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-1 px-3 rounded-lg shadow-md transition duration-300"
                        >
                          ✏️
                        </button>
                        <button
                          onClick={() => handleToggleAvailability(movie.id)}
                          className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-1 px-3 rounded-lg shadow-md transition duration-300"
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
          tabIndex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header bg-blue-500 text-white">
                <h5 className="modal-title">Agregar Nueva Película</h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <div className="space-y-4">
                  <input
                    type="text"
                    placeholder="Título"
                    className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={newMovie.title}
                    onChange={(ev) => {
                      let value = ev.target.value;

                      if (value.length > 25) value = value.slice(0, 25);

                      setNewMovie({ ...newMovie, title: value });
                    }}
                  />
                  <input
                    type="text"
                    placeholder="Descripción"
                    className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={newMovie.description}
                    onChange={(ev) => {
                      let value = ev.target.value;

                      if (value.length > 200) value = value.slice(0, 200);

                      setNewMovie({ ...newMovie, description: value });
                    }}
                  />
                  <input
                    type="text"
                    placeholder="Género"
                    className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={newMovie.genre}
                    onChange={(ev) => {
                      let value = ev.target.value;

                      if (value.length > 20) value = value.slice(0, 20);

                      setNewMovie({ ...newMovie, genre: value });
                    }}
                  />
                  <input
                    type="number"
                    placeholder="Año"
                    className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    onChange={(ev) => {
                      let value = ev.target.value;

                      if (value.length > 4) value = value.slice(0, 4);

                      setNewMovie({ ...newMovie, year: value });
                    }}
                    value={newMovie.year}
                  />
                  <input
                    type="text"
                    placeholder="URL de la imagen"
                    className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={newMovie.image}
                    onChange={(e) =>
                      setNewMovie({ ...newMovie, image: e.target.value })
                    }
                  />
                </div>
              </div>
              <div className="modal-footer">
                <button
                  onClick={handleAddMovie}
                  className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg shadow-md transition duration-300"
                  data-bs-dismiss="modal"
                >
                  💾 Guardar
                </button>
                <button
                  onClick={() => setShowNewMovieForm(false)}
                  className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded-lg shadow-md transition duration-300"
                  data-bs-dismiss="modal"
                >
                  ❌ Cancelar
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default AdminMovies;
