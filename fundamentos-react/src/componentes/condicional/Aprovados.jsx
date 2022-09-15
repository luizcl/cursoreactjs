import React from "react";
import Se from "./Se";

// eslint-disable-next-line import/no-anonymous-default-export
export default props => {
    return (
        <div>
            <Se test={ props.nota > 7}>
                <font color="blue">Aprovado</font> { props.nome }
            </Se>
            <Se test={ props.nota < 7}>
                <font color="red">Reprovado</font> { props.nome }
            </Se>
        </div>
    );
};