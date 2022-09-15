import React from "react";

// eslint-disable-next-line import/no-anonymous-default-export
export default (props) => {
    const isPar = props.numero % 2 === 0;
    
    return (
        <div>
            { isPar ? <span>Par</span> : <span>Ímpar</span>}
        </div>
    );
};