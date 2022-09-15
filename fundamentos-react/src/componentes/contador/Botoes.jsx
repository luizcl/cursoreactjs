import React from "react";

export default function Botoes(props) {
    return (
        <>
            <button onClick={props.inc}>+</button>
            <button onClick={props.dec}>-</button>
        </>
    );
}