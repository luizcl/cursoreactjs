import React from "react";

import {useParams} from "react-router-dom";

export default function Param() {

    const {id} = useParams();

    return (
        <div className="Home">
            <h1>Parametro</h1>
            <h2>Valor: {id}</h2>
        </div>
    );
}