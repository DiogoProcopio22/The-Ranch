var express = require("express");
var router = express.Router();

var usuarioController = require("../controllers/usuarioController");

router.get("/dadosArtista/:Artista", function (req, res) {
    usuarioController.dadosArtista(req,res);
})

module.exports = router;