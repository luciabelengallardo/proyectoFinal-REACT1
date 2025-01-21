import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";


function ContactoScreen({ }) {
  const navigate = useNavigate();

  const [formValues, setFormValues] = useState({
    nombreyapellido: "",
    email: "",
    consulta: "",
  });

  useEffect (()=>{
    const listaContacto = JSON.parse(localStorage.getItem("lista-contacto")) ||[]

  },[])
  const handleChange = (e) => {
    setFormValues({
      ...formValues,

      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();


    
    //? validar que se completen los campos
    if (!formValues.email || formValues.nombreyapellido || formValues.consulta ) {
      alert("Debe completar los campos obligatorios!");
    }


  };

  return (
    <>
      <div className="login-container container d-flex justify-content-center align-items-center">
        <div className="login-form bg-light p-4 rounded shadow">
          <h2 className="text-center text-black mb-4">Contactanos</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="" className="form-label text-black">
                Nombre y Apellido
              </label>
              <input
                type="text"
                className="form-control"
                id="nombre"
                name="nombre"
                placeholder="Juan Roman"
                minlength="4"
                maxlength="30" 
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
                minlength="6"
                maxlength="60"
                placeholder="ejemplo@gmail.com"
                value={formValues.email}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label text-black">
                Consulta
              </label>
              <input
                type="text"
                className="form-control"
                id="nombre"
                name="nombre"
                placeholder="Escriba su consulta aquí"
                minlength="30"
                maxlength="300"
                value={formValues.consulta}
                onChange={handleChange}
              />
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
