import { useState } from "react";
import Cliente from "../core/Cliente";
import Botao from "./Botao";
import Entrada from "./Entrada";

interface FormularioProps {
    cliente: Cliente;
    clienteAlterado?: (cliente: Cliente) => void;
    cancelado?: () => void;
}

export default function Formulario(props: FormularioProps) {
    const id = props.cliente?.id;
    const [nome, setNome] = useState(props.cliente?.nome ?? "");
    const [idade, setIdade] = useState(props.cliente?.idade ?? 0);


    return (
        <div>
            {id ? (
                <Entrada texto="Código" valor={id} somenteLeitura/>
            ) : false}
            <Entrada 
                texto="Nome" 
                valor={nome}
                valorAlterado={setNome}
                estilo="mb-4"
            />
            <Entrada 
                texto="Idade" 
                tipo="number" 
                valor={idade}
                valorAlterado={setIdade}
                estilo="mb-4"
            />
            <div className="mt-3 flex justify-end">
                <Botao cor="blue" estilo="mr-2"
                    noClick={() => props.clienteAlterado?.(new Cliente(nome, idade, id))}>
                    {id ? "Alterar" : "Salvar"}
                </Botao>
                <Botao noClick={props.cancelado}>
                    Cancelar
                </Botao>
            </div>
        </div>

    );
}