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
      image: "../img/lucia.jpg",
    },
    {
      name: "Gonzalo",
      description:
        "Hola! mi nombre es Gonzalo. Estudio programación web en rolling code, y soy técnico en una empresa de sistemas de comunicación. Hincha y socio del Club Atletico Boca Juniors",
      image: "../img/gonzalo.jpg",
    },
    {
      name: "Ignacio",
      description: ".",
      image: "../img/nacho.jpg",
    },
  ];

  return (
    <div className="about-us">
      <h1>Sobre Nosotros</h1>
      <div className="team-container">
        {teamMembers.map((member, index) => (
          <div className="team-member" key={index}>
            <img src={member.image} alt={member.name} className="team-image" />
            <h2>{member.name}</h2>
            <p>{member.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutUs;
