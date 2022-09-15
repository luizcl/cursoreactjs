import React from "react";
import alunos from "../../mockdados/alunos";

// eslint-disable-next-line import/no-anonymous-default-export
export default (props) => {

    const lista = alunos.map(aluno => {
        return (
            <li key={aluno.id}>
                {aluno.id}) {aluno.nome} -> {aluno.nota}
            </li>
        );
    });

    return (
        <div>
            <ul>
                {lista}
            </ul>
        </div>
    );
};