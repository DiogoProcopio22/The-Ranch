const database = require('../database/config');

function checar(req, res) {
    const { email, senha } = req.body;

    const instrucao = `
        SELECT * FROM usuario WHERE email = '${email}' AND senha = '${senha}';
    `;

    database.executar(instrucao)
        .then(resultado => {
            if (resultado.length > 0) {
                res.json(resultado);
            } else {
                res.json([]);
            }
        })
        .catch(erro => {
            console.error('Erro no login:', erro);
            res.status(500).json(erro.sqlMessage);
        });
}

module.exports = {
    checar
};
