import Cliente from "../../core/Cliente";
import RepositorioCliente from "../../backend/RepositorioCliente";

export default function handler(req, res) {
  const repo = new RepositorioCliente();
  
  if (req.method === "GET") {
    let cli: Cliente[] = [];
    
    repo.consultarTodos().then(cAux => {
      cAux.forEach(c => {
        console.log(c);
        cli.push(new Cliente(c.nome, c.idade, c.id));
      });
    }).finally( () => {
      console.log(cli);
      res.status(200).json({clientes: cli[0]});
    });
  } else {
    res.status(200).json({ name: 'John Doe' })
  }

}
