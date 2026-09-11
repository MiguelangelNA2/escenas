import { useEffect, useRef } from "react";
import lottie from "lottie-web";

import "./Escena2.css";
import hojas from "../assets/hojas.json";
import sirleon from "../assets/sirleonmuerto.json";

function Escena2() {
    const hojasRef = useRef(null);
    const sirleonRef = useRef(null);

    useEffect(() => {
        if (!hojasRef.current) return;

        const animacionHojas = lottie.loadAnimation({
            container: hojasRef.current,
            renderer: "svg",
            loop: true,
            autoplay: true,
            animationData: hojas,
        });

        return () => {
            animacionHojas.destroy();
        };
    }, []);

    useEffect(() => {
        if (!sirleonRef.current) return;

        const animacionSirLeon = lottie.loadAnimation({
            container: sirleonRef.current,
            renderer: "svg",
            loop: true,
            autoplay: false,
            animationData: sirleon,
        });

        animacionSirLeon.setSpeed(1);
        animacionSirLeon.play();

        return () => {
            animacionSirLeon.destroy();
        };
    }, []);

    return (
        <div className="escena2">

            {/* FONDO */}
            <img
                className="fondo2"
                src="/img/fondo2.png"
                alt="Fondo de la escena 2"
            />

            {/* HOJAS */}
            <div
                className="hojas"
                ref={hojasRef}
            ></div>

            {/* SIR LEÓN */}
            <div
                className="personaje2"
                ref={sirleonRef}
            ></div>

        </div>
    );
}

export default Escena2;