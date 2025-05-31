var express = require("express");
var router = express.Router();

var usuarioController = require("../controllers/usuarioController");

router.get("/dadosUsuario/:dados", function (req, res) {
    usuarioController.dadosUsuario(req,res);
})

module.exports = router;