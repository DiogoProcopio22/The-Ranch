const database = require('../database/config');
var loginModel = require("../models/loginModel")

function checar(req, res) {
    var email = req.body.email
    var senha = req.body.senha
    if (email == undefined) {
        res.status(400).send("Seu email está indefinido")
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está indefinida")
    } else {
        loginModel.checar(email, senha)
            .then(resposta => {
                if (resposta.length > 0) {
                    res.json(resposta[0]);
                } else {
                    res.status(403).send("Email e/ou senha inválidos"); 
                }

            })
            .catch(erro => {
                console.log(erro)
                res.status(500).json(erro.sqlMessage)
            })
    }
}

module.exports = {
    checar
}