import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../img/logomovienight.png";

function NavBar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-navbar">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img src={logo} alt="logo-movie-night" />
          </Link>
          <button
            className="navbar-toggler bg-secondary "
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav d-flex align-items-center">
              <li className="nav-item">
                <Link
                  className="nav-link active text-white"
                  aria-current="page"
                  to="/"
                >
                  Inicio
                </Link>
              </li>
              {/* <li className="nav-item">
                <Link className="nav-link text-white" to="/AboutUs">
                  Nosotros
                </Link>
              </li> */}

              <li className="nav-item btn btn-outline-secondary btn-iniciar-sesion">
                <Link className="nav-link text-white" to="/login">
                  Iniciar Sesion
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
