import React from "react";
import "./Escena1.css";

function Escena1() {
    return (
        <>
            <div className="personaje">
                <img
                    src="/img/sirleon.png"
                    alt="Sir León"
                />
            </div>

            <div className="arbol">
                <img
                    src="/img/arbol.png"
                    alt="Árbol"
                />
            </div>

            <div className="cartel">
                <img
                    src="/img/cartel.png"
                    alt="Cartel"
                />
            </div>

            <div className="casa destruida">
                <img
                    src="/img/casa destruida.png"
                    alt="Casa destruida"
                />
            </div>

            <div className="cuerpos">
                <img
                    src="/img/cuerpos.png"
                    alt="Cuerpos"
                />
            </div>
        </>
    );
}

export default Escena1;