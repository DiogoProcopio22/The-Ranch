var database = require("../database/config")

function dadosUsuario(dados) {
    
    var instrucaoSql = `
        select u.nome AS Nome,
        u.dtNasc AS Nascimento, 
        u.email AS Email,
        e.nome AS Estilo
        from usuario u join estilo_sertanejo e
        on u.fkEstilo = e.idEstilo;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    dadosUsuario
};