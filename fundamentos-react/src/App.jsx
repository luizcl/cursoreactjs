import "./App.css";

import React from "react";

import Primeiro from './componentes/basicos/Primeiro'
import CompParametro from './componentes/basicos/ComParametro'
import Fragmento from './componentes/basicos/Fragmento'
import Aleatorio from "./componentes/basicos/Aleatorio";
import Card from "./componentes/layout/Card";
import Familia from "./componentes/basicos/Familia";
import FamiliaMembro from "./componentes/basicos/FamiliaMembro";
import ListaAlunos from "./componentes/repeticao/ListaAlunos";
import TabelaProdutos from "./componentes/repeticao/TabelaProdutos";
import ParOuImpar from "./componentes/condicional/ParOuImpar";
import Aprovados from "./componentes/condicional/Aprovados";
import DiretaPai from "./componentes/comunicacao/DiretaPai";
import IndiretaPai from "./componentes/comunicacao/IndiretaPai";
import Input from "./componentes/formulario/Input";
import Contador from "./componentes/contador/Contador";
import Mega from "./componentes/mega/Mega";


// Forma reduzida usando arrow function
// eslint-disable-next-line import/no-anonymous-default-export
export default () => (
    <div className="App">
        <h1>Fundamentos React</h1>
        <div className="Cards">
            <Card titulo="#13 - Desafio Megasena" color="#ffa58b">
                <Mega/>
            </Card>
            <Card titulo="#12 - Contador" color="#887674">
                <Contador numeroInicial={10}/>
            </Card>
            <Card titulo="#11 - Componente Controlado (Input)" color="#340b07">
                <Input />
            </Card>
            <Card titulo="#10 - Comunicação Indireta" color="#687e28">
                <IndiretaPai />
            </Card>
            <Card titulo="#09 - Comunicação Direta" color="#212c56">
                <DiretaPai />
            </Card>
            <Card titulo="#08 - Renderização Condicional" color="#efcc6d">
                <ParOuImpar numero={21}/>
                <ParOuImpar numero={20}/>
                <Aprovados nome="Adalberto" nota={6.5} />
                <Aprovados nome="Aline" nota={8.5} />
            </Card>

            <Card titulo="#07 - Desafio Repetição" color="#B059A3">
                <TabelaProdutos />
            </Card>
            <Card titulo="#06 - Repetição" color="#FF4C65">
                <ListaAlunos />
            </Card>
            <Card titulo="#05 - Componente com Filhos" color="#00C8F8">
                <Familia sobrenome="Lancaster">
                    <FamiliaMembro nome="Pedro" />
                    <FamiliaMembro nome="Gustavo" />
                    <FamiliaMembro nome="Sarah" />
                </Familia>
            </Card>

            <Card titulo="#04 - Desafio Número Aleatório" color="#FA6900">
                <Aleatorio min={-10} max={10} />
            </Card>

            <Card titulo="#03 - Fragmento" color="#E94C6F">
                <Fragmento/>
            </Card>

            <Card titulo="#02 - Com Parametros" color="#E8B71A">
                <CompParametro titulo="Situação do Aluno" aluno="Pedro Silva" nota={5.3} />
            </Card>
            
            <Card titulo="#01 - Primeiro Componente" color="#588C73">
                <Primeiro/>
            </Card>
        </div>
    </div>
);