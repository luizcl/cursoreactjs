import React from "react";

export default function InputMega(props) {

    return (
        <div>
            <label htmlFor="qtdNumerosInput">Quantidade de Números: </label>
            <input id="qtdNumerosInput" type="number" value={props.qtdNumeros} onChange={props.alterarQtd} min="6" max="15"/>
        </div>
    );
}