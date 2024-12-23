import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../css/register.css";

const users = [
  { email: "lucia@lucia.com", password: "123456", rol: "user" },
  { email: "gonzalo@gonzalo.com", password: "123456", rol: "user" },
  { email: "nacho@nacho.com", password: "123456", rol: "user" },
  { email: "admin@admin.com", password: "123456", rol: "admin" },
];

function RegisterScreen({ usuario, setUsuario }) {
  const navigate = useNavigate();

  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
    confirmpassword:"",
  });

  useEffect (()=>{
    const listaRegistro = JSON.parse(localStorage.getItem("lista-registro")) ||[]
    users.push(...listaRegistro)

  },[])
  const handleChange = (e) => {
    setFormValues({
      ...formValues,

      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let u = users.find((i) => i.email == formValues.email);

    
    //? validar que se completen los campos
    if (!formValues.email || !formValues.password || !formValues.confirmpassword  ) {
      alert("Debe completar los campos obligatorios!");
    }
    else if(u){
        alert("El mail ingresado ya existe!")
    }
    else if(formValues.password!=formValues.confirmpassword){
        alert("Las contraseñas ingresadas no coinciden!")
    }

     else {
        const listaRegistro = JSON.parse(localStorage.getItem("lista-registro")) ||[]
        const nuevo= {   email: formValues.email, password: formValues.password, rol: "user" }
        listaRegistro.push(nuevo)
        localStorage.setItem("lista-registro", JSON.stringify(listaRegistro) )
        alert("Fuiste registrado con exito! Se te enviara a la pagina de login.")
        navigate("/login")
        

    }
  };

  return (
    <>
      <div className="login-container container d-flex justify-content-center align-items-center">
        <div className="login-form bg-light p-4 rounded shadow">
          <h2 className="text-center text-black mb-4">Registrarse</h2>
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
              <label htmlFor="password" className="form-label text-black">
                Confirmar Contraseña
              </label>
              <input
                type="password"
                className="form-control"
                id="confirmpassword"
                name="confirmpassword"
                placeholder="********"
                value={formValues.confirmpassword}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <button type="submit" className="btn btn-secondary w-100">
                Registrarse
              </button>
            </div>
          </form>
        </div>

      </div>
    </>
  );
}

export default RegisterScreen;
