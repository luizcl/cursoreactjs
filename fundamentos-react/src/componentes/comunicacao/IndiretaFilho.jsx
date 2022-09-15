import React from "react";

// eslint-disable-next-line import/no-anonymous-default-export
export default props => {
    return (
        <div>
            Filho
            <div>
                <button onClick={_ => {props.quandoClicar('João', 53, true)}}>
                    Fornecer Informações
                </button>
            </div>
            
        </div>
    );
};