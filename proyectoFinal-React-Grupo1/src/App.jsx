import "./App.css";
import "./css/home.css";
import "./css/footer.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeScreen from "./pages/HomeScreen";
import ErrorScreen from "./pages/ErrorScreen";
import LoginScreen from "./pages/LoginScreen";
import AboutUsScreen from "./pages/AboutUsScreen";
import MoviesCategory from "./pages/MoviesCategory";
import AdminMovies from "./pages/Adminmovies";
import { useState } from "react";

function App() {
  const [usuario, setUsuario] = useState();

  return (
    <>
      <BrowserRouter>
        <NavBar usuario={usuario} setUsuario={setUsuario} />

        <main>
          <Routes>
            <Route path="/" element={<HomeScreen />} />
            <Route path="/AboutUs" element={<AboutUsScreen />} />
            <Route path="/*" element={<ErrorScreen />} />
            <Route
              path="/Login"
              element={
                <LoginScreen usuario={usuario} setUsuario={setUsuario} />
              }
            />
            {usuario && usuario.rol == "admin" && (
              <Route path="/Admin" element={<AdminMovies />} />
            )}

            <Route
              path="/Movies/:id"
              element={
                usuario ? (
                  <MoviesCategory />
                ) : (
                  <LoginScreen usuario={usuario} setUsuario={setUsuario} />
                )
              }
            />
          </Routes>
        </main>

        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
