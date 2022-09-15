import React from "react";

export default function Aleatorio(props) {
    const aux = Math.floor(Math.random() * (props.max - props.min + 1) + props.min)

    return (
        <h3>Número aleatório entre { props.min } e { props.max } = { aux } </h3>
    );
}