import React from "react";

// eslint-disable-next-line import/no-anonymous-default-export
export default (props) => {
    return (
        <div>
            {React.Children.map(props.children, (filho) => {
                return React.cloneElement(filho, props);
            })}
        </div>
    );

    // Alternativa
    // return (
    //     <div>
    //         {props.children.map((filho, indice) => {
    //             return React.cloneElement(filho, { ...props, key: indice });
    //         })}
    //     </div>
    // );

};