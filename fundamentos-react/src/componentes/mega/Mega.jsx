import "./mega.css";
import React from "react";
import InputMega from "./InputMega";
import BotoesMega from "./BotoesMega";
import DisplayMega from "./DisplayMega";

export default function Mega() {

    const [qtdNumerosInput, setQtdNumerosInput] = React.useState(6);
    const [jogo, setJogo] = React.useState([]);

    function alterarQuantidade(e) {
        setQtdNumerosInput(e.target.value);
    }

    function atualizarJogo(j) {
        let numeros = [];
        let numero = Math.floor(Math.random() * (59 + 1) + 1);
        let i = 0;
        while (i < qtdNumerosInput) {
            while (numeros.includes(numero)) {
                numero = Math.floor(Math.random() * (59 + 1) + 1);
            }
    
            numeros.push(numero);
            i++;
        }

        setJogo(numeros.sort((n1, n2) => n1 - n2));
    }

    return (
        <div className="Mega">
            <InputMega qtdNumeros={qtdNumerosInput} alterarQtd={alterarQuantidade}/>
            <BotoesMega obterJogo={atualizarJogo}/>
            <DisplayMega numeros={jogo}/>
        </div>
    );
}