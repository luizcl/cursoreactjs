import Cliente from "../core/Cliente";
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function salvarCliente(cliente: Cliente) {
    const chave = cliente.id && `${Date.now()}`;

    const novoCliente = await prisma.cliente.create({
        data: {
            id: chave,
            nome: cliente.nome,
            idade: cliente.idade
        },
      });

    return novoCliente;  
}


async function main() {
    const cliente = await prisma.cliente.create({
        data: {
            id: "1",
            nome: "Raul",
            idade: 15
        },
      });

      console.log(cliente);
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })