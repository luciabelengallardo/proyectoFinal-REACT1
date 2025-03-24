import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../css/login.css";

const users = [
  { email: "lucia@lucia.com", password: "123456", rol: "user" },
  { email: "gonzalo@gonzalo.com", password: "123456", rol: "user" },
  { email: "nacho@nacho.com", password: "123456", rol: "user" },
  { email: "admin@admin.com", password: "123456", rol: "admin" },
];

function LoginScreen({ usuario, setUsuario }) {
  const navigate = useNavigate();

  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  });
  useEffect(() => {
    const listaRegistro =
      JSON.parse(localStorage.getItem("lista-registro")) || [];
    users.push(...listaRegistro);
  }, []);

  const handleChange = (e) => {
    setFormValues({
      ...formValues,

      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let u = users.find((i) => i.email == formValues.email);

    if (!formValues.email || !formValues.password) {
      alert("Debe completar los campos obligatorios!");
    }

    if (u && formValues.password === u.password) {
      u.rol == "admin" ? navigate("/admin") : navigate("/");
      localStorage.setItem("email", u.email);
      setUsuario(u);
    } else {
      alert("Email o contraseña incorrecto!");
    }
  };

  return (
    <>
      <div className="login-container container d-flex justify-content-center align-items-center">
        <div className="login-form bg-light p-4 rounded shadow">
          <h2 className="text-center text-black mb-4">Iniciar Sesión</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="email" className="form-label text-black">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                placeholder="ejemplo@gmail.com"
                maxlength="25"
                value={formValues.email}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label text-black">
                Contraseña
              </label>
              <input
                type="password"
                className="form-control"
                id="password"
                name="password"
                placeholder="********"
                value={formValues.password}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <button type="submit" className="btn btn-secondary w-100">
                Iniciar Sesión
              </button>
            </div>
          </form>
        </div>
        <p className="text-secondary pt-3">
          Nuevo en Movie Night?{" "}
          <Link to="/register">
            <strong>Registrate Ahora</strong>
          </Link>
        </p>
      </div>
    </>
  );
}

export default LoginScreen;
