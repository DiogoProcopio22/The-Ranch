var artistaModel = require("../models/artistaModel");

function dadosArtista(req, res) {
    var Artista = req.params.Artista;

    artistaModel.dadosArtista(Artista).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado); 
        } else {
            res.status(204).send("Nenhuma postagem encontrada!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as postagens.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

module.exports = {
    dadosArtista
}