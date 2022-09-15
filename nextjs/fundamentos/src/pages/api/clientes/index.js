export default function cliente(req, res) {
    if (req.method === "GET") {
        tratarRequisicaoGet(req, res);
    } else {
        res.status(405).send();
    }
}

function tratarRequisicaoGet(req, res) {
    res.status(200).json({
        id: 3,
        name: 'Maria Doe',
        idade: 33 });
}