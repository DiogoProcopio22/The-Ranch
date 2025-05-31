var database = require("../database/config")

function autenticar(email, senha) {
    console.log(email, senha)
    var instrucaoSql = `
        SELECT id, nome, dtNasc, email, senha, fkEstilo as Estilo FROM usuario WHERE email = '${email}' AND senha = '${senha}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

// Coloque os mesmos parâmetros aqui. Vá para a var instrucaoSql
function cadastrar(nome, dtNasc, email, senha, fkEstilo) {
    console.log(nome, dtNasc, email, senha, fkEstilo);
    
    var instrucaoSql = `
        INSERT INTO usuario (nome, dtNasc, email, senha, fkEstilo) VALUES ('${nome}', '${dtNasc}', '${email}', '${senha}', '${fkEstilo}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


module.exports = {
    autenticar,
    cadastrar
};