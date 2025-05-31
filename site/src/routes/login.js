var express = require("express")
var router = express.Router();
var loginController = require("../controllers/loginController")

router.post("/autenticar", function(req,res){
    loginController.checar(req,res)
})

module.exports = router;
