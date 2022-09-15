import React from "react";
import DiretaFilho from "./DiretaFilho";

// eslint-disable-next-line import/no-anonymous-default-export
export default props => {
    return (
        <>
            <DiretaFilho nome="Peter" idade={16} bool={true}/>
            <DiretaFilho nome="Laila" idade={25} bool={false}/>
        </>
    )
};