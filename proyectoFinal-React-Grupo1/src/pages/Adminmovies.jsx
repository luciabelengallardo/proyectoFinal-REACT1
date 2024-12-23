import React, { useState, useEffect } from "react";
import { Movienight } from "../data/Movienight";

const AdminMovies = () => {
  const [movies, setMovies] = useState([]);
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
    const newId = `movie-${Date.now()}`;
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
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Administrar Películas</h1>
        {/* <button
          onClick={() => setShowNewMovieForm(true)}
          className="bg-blue-600 text-white px-4 py-2 rounded-md flex items-center gap-2"
        >
          ➕ Nuevo
        </button> */}
        <button
          type="button"
          class="btn btn-primary"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          Launch demo modal
        </button>
      </div>

      <div className="mb-6 relative">
        <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
          🔍
        </span>
        <input
          type="text"
          placeholder="Buscar película..."
          className="w-full pl-10 pr-4 py-2 border rounded-md"
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border rounded-lg">
          <thead className="bg-gray-50">
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
                      <button
                        onClick={handleSaveEdit}
                        className="text-green-600 hover:text-green-800"
                      >
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
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel">
                Modal title
              </h1>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                <div className="bg-white p-6 rounded-lg w-96">
                  <h2 className="text-xl font-bold mb-4">
                    Agregar Nueva Película
                  </h2>
                  <div className="space-y-4">
                    <input
                      type="text"
                      placeholder="Título"
                      className="w-full p-2 border rounded"
                      value={newMovie.title}
                      onChange={(e) =>
                        setNewMovie({ ...newMovie, title: e.target.value })
                      }
                    />
                    <input
                      type="text"
                      placeholder="Descripción"
                      className="w-full p-2 border rounded"
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
                      className="w-full p-2 border rounded"
                      value={newMovie.genre}
                      onChange={(e) =>
                        setNewMovie({ ...newMovie, genre: e.target.value })
                      }
                    />
                    <input
                      type="number"
                      placeholder="Año"
                      className="w-full p-2 border rounded"
                      value={newMovie.year}
                      onChange={(e) =>
                        setNewMovie({ ...newMovie, year: e.target.value })
                      }
                    />
                    <div className="flex gap-4">
                      <button
                        onClick={handleAddMovie}
                        className="bg-blue-600 text-white px-4 py-2 rounded"
                      >
                        💾 Guardar
                      </button>
                      <button
                        onClick={() => setShowNewMovieForm(false)}
                        className="bg-gray-300 px-4 py-2 rounded"
                      >
                        ❌ Cancelar
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" class="btn btn-primary">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminMovies;
