import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../img/logomovienight.png";
import "../css/navbar.css";

function NavBar({ usuario, setUsuario }) {
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
            <div className="d-flex">
              <ul className="navbar-nav d-flex align-items-center">
                <li className="nav-item">
                  <Link
                    className="nav-link active text-white"
                    aria-current="page"
                    to="/"
                  >
                    <i className="bi bi-house-fill "></i>
                    Inicio
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-white" to="/Movies">
                    <i className="bi bi-film"></i>
                    Peliculas
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-white" to="/series">
                    <i className="bi bi-tv"></i>
                    Series
                  </Link>
                </li>
                {usuario && usuario.rol == "admin" && (
                  <li className="nav-item">
                    <Link className="nav-link text-white" to="/Admin">
                      <i className="bi bi-tv"></i>
                      Admin
                    </Link>
                  </li>
                )}
              </ul>
            </div>
            <div className="nav-item btn btn-outline-secondary btn-iniciar-sesion">
              <Link
                onClick={() => {
                  localStorage.removeItem("email");
                  setUsuario("");
                }}
                className="nav-link text-white"
                to="/Login"
              >
                {usuario ? "Cerrar Sesion" : "Iniciar Sesion"}
              </Link>
            </div>
          </div>
        </div>

        <div className="">
          {usuario && (
            <div className="d-flex">
              <span className="text-white username">{usuario.email}</span>
              <i className="bi bi-person-circle text-white profile-circle"></i>
            </div>
          )}
        </div>
      </nav>
    </>
  );
}

export default NavBar;
