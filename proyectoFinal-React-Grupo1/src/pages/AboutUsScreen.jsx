import React from "react";
import Lucia from "../img/lucia.jpg";
import Gonzalo from "../img/gonzalo.jpg";
import Ignacio from "../img/nacho.jpg";

const AboutUs = () => {
  const teamMembers = [
    {
      name: "Lucia",
      description:
        "Mi nombre es Lucia Gallardo, soy estudiante de Programacion Web en Rolling Code School. Me gusta viajar y aprender del mundo de la tecnologia",
      image: Lucia,
    },
    {
      name: "Gonzalo",
      description:
        "Hola! mi nombre es Gonzalo. Estudio programación web en rolling code, y soy técnico en una empresa de sistemas de comunicación. Hincha y socio del Club Atletico Boca Juniors",
      image: Gonzalo,
    },
    {
      name: "Ignacio",
      description:
        "Hola, mi nombre es Ignacio Gonzalez Dupuy, tengo 21 años. Estoy estudiando programacion y soy futbolista amateur",
      image: Ignacio,
    },
  ];

  return (
    <div className=" container py-5">
      <h1 className="text-center text-white mb-4">Sobre Nosotros</h1>
      <div className="row justify-content-center">
        {teamMembers.map((member, index) => (
          <div className="col-md-4 mb-4 container-card" key={index}>
            <div className="card">
              <div className="card-tamano">
                <img
                  src={member.image}
                  alt={member.name}
                  className="card-img"
                />
              </div>
              <div className="card-body">
                <h5 className="card-title text-center">{member.name}</h5>
                <p className="card-text">{member.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutUs;
