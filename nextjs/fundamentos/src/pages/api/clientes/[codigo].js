export default function Codigo(req, res) {
    const codigo = req.query.codigo;

    res.status(200).json({
        id: codigo,
        nome: `Maria ${codigo}`,
        email: `mariamariamaria${codigo}@xfcm.mail.com`
    });
}