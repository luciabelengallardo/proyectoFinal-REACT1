import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

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
      <div className="container text-white">
        <div className="row">
          <div className="col text-center">
            <h2></h2>
          </div>
        </div>
        <div className="row">
          <div className="col col-md-6 offset-md-3">
            <form onSubmit={handleSubmit}>
              <div className="mb-3 d-grid">
                <label>Email</label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  // required
                  //   onChange={(e) => {
                  //     setEmail(e.target.value);
                  //   }}
                  value={formValues.email}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3 d-grid">
                <label>Password</label>
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  //   onChange={(e) => {
                  //     setPassword(e.target.value);
                  //   }}
                  value={formValues.password}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3 d-grid">
                <button className="btn btn-secondary">Iniciar Sesion</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginScreen;
