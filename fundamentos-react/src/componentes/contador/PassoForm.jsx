import React from "react";

export default function PassoForm(props) {
    return (
        <div>
            <label htmlFor="passoInput">Passo: </label>
            <input id="passoInput" type="number" value={props.passo} onChange={props.alterarPasso} />
        </div>
    );
}