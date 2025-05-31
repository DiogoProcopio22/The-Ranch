var express = require("express");
var router = express.Router();

var artistaController = require("../controllers/artistaController");

router.get("/dadosArtista/:Artista", function (req, res) {
    artistaController.dadosArtista(req,res);
})

module.exports = router;