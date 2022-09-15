import React from "react";
import produtos from "../../mockdados/produtos";

// eslint-disable-next-line import/no-anonymous-default-export
export default (props) => {

    const lista = produtos.map(produto => {
        return (
            <tr key={produto.id}>
                <td>{produto.nome}</td>
                <td>R$ {produto.valor.toFixed(2).replace('.', ',')}</td>
            </tr>
        );
    });

    return (
        <table>
            <thead>
                <tr>
                    <th>Nome</th>
                    <th>Valor</th>
                </tr>
            </thead>
            <tbody>
                { lista }
            </tbody>
        </table>
    );
};