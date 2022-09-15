import estilo from "../styles/estiloso.module.css";
import Layout from "../components/Layout";

export default function Estiloso() {
    return (
        <Layout titulo="Exemplo CSS Modularizado">
            <div className={estilo.roxo}>
                <h1>Estilo usando CSS Módulos</h1>
            </div>
        </Layout>
    );
}