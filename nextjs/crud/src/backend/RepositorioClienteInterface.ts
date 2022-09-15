import Cliente from "../core/Cliente";

export default interface RepositorioClienteInterface {
    salvar(cliente: Cliente): Promise<Cliente>;
    excluir(cliente: Cliente): Promise<void>;
    consultarTodos(): Promise<Cliente[]>;
}