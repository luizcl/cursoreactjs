import "./contador.css";
import React from "react";
import Display from "./Display";
import Botoes from "./Botoes";
import PassoForm from "./PassoForm";

export default class Contador extends React.Component {

    state = {
        numero: this.props.numeroInicial || 0,
        passo: this.props.passoInicial || 5
    }

    incrementar = () => {
        this.setState({
            numero: this.state.numero + this.state.passo
        })
    }

    decrementar = () => {
        this.setState({
            numero: this.state.numero -this.state.passo
        })
    }

    alterarPasso = (e) => {
        this.setState({
            passo: +e.target.value
        });
    }

    render() {
        return (
            <div className="Contador">
                <h2>Contador</h2>
                <Display numero={this.state.numero}/>
                <PassoForm passo={this.state.passo} alterarPasso={this.alterarPasso}/>
                <Botoes inc={this.incrementar} dec={this.decrementar}/>
            </div>
        );
    };
}