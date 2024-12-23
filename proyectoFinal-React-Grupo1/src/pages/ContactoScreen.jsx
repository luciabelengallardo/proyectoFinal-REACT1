import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function ContactoScreen() {
  const navigate = useNavigate();

  const [formValues, setFormValues] = useState({
    nombreyapellido: "",
    email: "",
    consulta: "",
  });

  useEffect(() => {
    const listaContacto =
      JSON.parse(localStorage.getItem("lista-contacto")) || [];
  }, []);

  const handleChange = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !formValues.nombreyapellido ||
      !formValues.email ||
      !formValues.consulta
    ) {
      alert("Debe completar todos los campos obligatorios!");
      return;
    } else {
      alert("Su consulta fue enviada con exito!");
    }

    const listaContacto =
      JSON.parse(localStorage.getItem("lista-contacto")) || [];
    listaContacto.push(formValues);
    localStorage.setItem("lista-contacto", JSON.stringify(listaContacto));

    setFormValues({
      nombreyapellido: "",
      email: "",
      consulta: "",
    });

    navigate("/Contacto");
  };

  return (
    <>
      <div className="login-container container d-flex justify-content-center align-items-center">
        <div className="login-form bg-light p-4 rounded shadow">
          <h2 className="text-center text-black mb-4">Contactanos</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label
                htmlFor="nombreyapellido"
                className="form-label text-black"
              >
                Nombre y Apellido
              </label>
              <input
                type="text"
                className="form-control"
                id="nombreyapellido"
                name="nombreyapellido"
                placeholder="Juan Roman"
                value={formValues.nombreyapellido}
                onChange={handleChange}
              />
            </div>
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
              <label htmlFor="consulta" className="form-label text-black">
                Consulta
              </label>
              <textarea
                className="form-control"
                id="consulta"
                name="consulta"
                placeholder="Escriba su consulta aquí"
                value={formValues.consulta}
                onChange={handleChange}
              ></textarea>
            </div>

            <div className="mb-3">
              <button type="submit" className="btn btn-secondary w-100">
                Enviar
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default ContactoScreen;
