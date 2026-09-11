import { useState } from "react";
import "./App.css";

import Escena1 from "./escenas/Escena1";
import Escena2 from "./escenas/Escena2";

function App() {
    const [escenaActual, setEscenaActual] = useState(1);

    const siguienteEscena = () => {
        if (escenaActual < 2) {
            setEscenaActual(escenaActual + 1);
        }
    };

    const escenaAnterior = () => {
        if (escenaActual > 1) {
            setEscenaActual(escenaActual - 1);
        }
    };

    return (
        <div className="contenedor-principal">

            <main className="escena">

                {escenaActual === 1 && <Escena1 />}
                {escenaActual === 2 && <Escena2 />}

            </main>

            <div className="controles">

                {escenaActual > 1 && (
                    <button
                        className="boton-navegacion"
                        onClick={escenaAnterior}
                    >
                        ←
                    </button>
                )}

                {escenaActual < 2 && (
                    <button
                        className="boton-navegacion"
                        onClick={siguienteEscena}
                    >
                        →
                    </button>
                )}

            </div>

        </div>
    );
}

export default App;