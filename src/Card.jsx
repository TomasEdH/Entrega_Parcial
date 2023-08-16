import React from "react";

function Card({estudiantes}) {
    return (
        <div className="box-map">
            <h2>|---------------------|</h2>
           {estudiantes.map((estudiante, index) => (
            <div key={index} >
                <h3>¡Hola, {estudiante.nombre}!</h3>
                <h3>Vemos que tu club favorito es: {estudiante.club}</h3>
            </div>
           ))}
        </div>
    )
};

export default Card;