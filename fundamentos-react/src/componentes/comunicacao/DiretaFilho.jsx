import React from "react";

// eslint-disable-next-line import/no-anonymous-default-export
export default props => {
    return (
        <div>
            <span>{props.nome} </span>
            <span>{props.idade} </span>
            <span>{props.bool ? "NERD" : "ALPHABETA"}</span>
        </div>
        
    );

}