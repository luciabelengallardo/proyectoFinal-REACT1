import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/login.css";

function LoginScreen() {
  const navigate = useNavigate();

  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  });
  console.log(formValues);

  const handleChange = (e) => {
    // console.log(e.target.value);
    setFormValues({
      ...formValues,

      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    //USUARIO REGISTRADO DE EJEMPLO - DB
    const user = {
      email: "lucia@lucia.com",
      password: "123456",
    };

    //? validar que se completen los campos
    if (!formValues.email || !formValues.password) {
      alert("Debe completar los campos obligatorios!");
    }

    if (
      formValues.email === user.email &&
      formValues.password === user.password
    ) {
      // alert("Datos correctos");
      navigate("/");
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
      </div>
    </>
  );
}

export default LoginScreen;
