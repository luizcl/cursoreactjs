import { PrismaClient } from '@prisma/client'

import Cliente from "../core/Cliente";
import RepositorioClienteInterface from "./RepositorioClienteInterface";

const prisma = new PrismaClient();
export default class RepositorioCliente implements RepositorioClienteInterface {

    async salvar(cliente: Cliente): Promise<Cliente> {
        const novoCliente = cliente.id ? (
            
            await prisma.cliente.update({
                where: {
                    id: cliente.id
                },
                data: {
                    nome: cliente.nome,
                    idade: cliente.idade
                }
            })
        ):(
            await prisma.cliente.create({
                data: {
                    id: `${Date.now()}`,
                    nome: cliente.nome,
                    idade: cliente.idade
                },
            })
        );
    
        return new Cliente(novoCliente.id, novoCliente.idade, novoCliente.id);  
    }
    
    async excluir(cliente: Cliente): Promise<void> {
        if (cliente.id) {
            await prisma.cliente.delete({
                where: {
                    id: cliente.id
                },
            });            
        }
    }

    async consultarTodos(): Promise<Cliente[]> {
        let clientes: Cliente[] = [];

        const repoClientes = await prisma.cliente.findMany(); 
        repoClientes.forEach(cliente => {
            let cliente_aux = new Cliente(cliente.nome, cliente.idade, cliente.id);
            clientes.push(cliente_aux);
        });

        return clientes;
    }
}