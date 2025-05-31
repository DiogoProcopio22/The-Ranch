var database = require("../database/config")

function dadosArtista(Artista) {
    
    var instrucaoSql = `
        select * from artistas where nome = '${Artista}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    dadosArtista
};