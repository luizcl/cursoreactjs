import './input.css';
import React, { useState } from "react";

export default function Input() {
    const [valor, setValor] = useState("Inicial");

    function quandoMudar(e) {
        setValor(e.target.value);
    }

    return (
        <div>
            <div className="Input">
                <h2>{valor}</h2>
                <input value={valor} onChange={quandoMudar}/>
                <input value={valor} readOnly/>
                {/*Se não informar o readonly é apresentado erro no input */}
            </div>
        </div>
    );
};