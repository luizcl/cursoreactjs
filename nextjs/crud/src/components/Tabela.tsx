import Cliente from "../core/Cliente";
import {botaoEdicao, botaoLixo} from "../components/Icones";

interface TabelaProps {
    clientes: Cliente[];
    clienteSelecionado?: (cliente: Cliente) => void;
    clienteExcluido?: (cliente: Cliente) => void;
}

export default function Tabela(props: TabelaProps) {

    const exibirAcoes = props.clienteSelecionado || props.clienteExcluido;

    function renderizarCabecalho() {
        return (
            <tr>
                <th className="text-left p-4">Código</th>
                <th className="text-left p-4">Nome</th>
                <th className="text-left p-4">Idade</th>
                {exibirAcoes ? (
                    <th className="text-center p-4">Ações</th>
                ) : false}
            </tr>
        );
    }

    function renderizarDados() {
        return props.clientes?.map((cliente, indice) => {
                return (
                    <tr key={cliente.id} className={`${indice % 2 === 0 ? "bg-purple-200" : "bg-purple-100"}`}>
                        <td className="text-left p-4">{cliente.id}</td>
                        <td className="text-left p-4">{cliente.nome}</td>
                        <td className="text-left p-4">{cliente.idade}</td>
                        {renderizarAcoes(cliente)}
                    </tr>);
                });
    }

    function renderizarAcoes(cliente: Cliente) {
        return (
            <td className="flex justify-center">
                {props.clienteSelecionado ? (
                    <button className={`
                        flex justify-center items-center
                        text-green-600 rounded-full p-2 m-1
                        hover:bg-purple-50
                    `} onClick={() => props.clienteSelecionado?.(cliente)}>
                        {botaoEdicao}
                    </button>
                ) : false}
                {props.clienteExcluido ? (
                    <button className={`
                        flex justify-center items-center
                        text-red-600 rounded-full p-2 m-1
                        hover:bg-purple-50
                    `} onClick={() => props.clienteExcluido?.(cliente)}>
                        {botaoLixo}
                    </button>
                ) : false}
            </td>
        );
    }

    return (
        <table className="w-full rounded-xl overflow-hidden">
            <thead className={`
                text-gray-100
                bg-gradient-to-r from-purple-500 to-purple-800
            `}>
                {renderizarCabecalho()}
            </thead>
            <tbody>
                {renderizarDados()}
            </tbody>
        </table>
    );
}