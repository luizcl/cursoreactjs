import Botao from "../components/Botao";
import Layout from "../components/Layout";
import Tabela from "../components/Tabela";
import Cliente from "../core/Cliente";
import Formulario from "../components/Formulario";

import { useEffect, useState } from "react";



export default function Home(props) {

  const [cliente, setCliente] = useState<Cliente>(Cliente.vazio());
  const [clientes, setClientes] = useState<Cliente[]>([]);
  const [visivel, setVisivel] = useState<"tabela" | "form">("tabela");

//  const clientes = [
//    new Cliente("Ana", 15, "1"),
//    new Cliente("Ken", 26, "2"),
//    new Cliente("Rui", 45, "3")
//  ];

  useEffect(() => {
    setClientes(props.data);
  }, []);

  function clienteSelecionado(cliente: Cliente) {
    setCliente(cliente);
    setVisivel("form");
  }
  
  function clienteExcluido(cliente: Cliente) {
    console.log(`Excluir ${cliente.nome}`);
  }
  
  function novoCliente() {
    setCliente(Cliente.vazio());
    setVisivel("form");
  }

  function salvarCliente(cliente: Cliente) {
    console.log(cliente);
  }

  return (
    <div className={`
      flex h-screen justify-center items-center
      bg-gradient-to-r from-blue-500 to-purple-500
      text-white
    `}>
      <Layout titulo="Cadastro Simples">
        {visivel === "tabela" ? (
          <>
            <div className="flex justify-end">
              <Botao 
                cor="gray" 
                estilo="mb-2" 
                noClick={novoCliente}>Novo cliente</Botao>
            </div>
            <Tabela 
              clientes={clientes} 
              clienteSelecionado={clienteSelecionado} 
              clienteExcluido={clienteExcluido} />
          </>
        ) : (
          <Formulario 
            cliente={cliente} 
            clienteAlterado={salvarCliente}
            cancelado={() => setVisivel("tabela")}/>
        )}

      </Layout>
    </div>
  );
}
