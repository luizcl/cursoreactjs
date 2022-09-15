import React from "react";

export default function DisplayMega(props) {

    const valores = props.numeros.map((n, i) => {
        return (
            <span key={i}>{n < 10 ? "0" + n : n} </span>
        );
    });

    return (
        <div>
            {valores}
        </div>
    );
}