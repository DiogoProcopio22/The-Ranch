var database = require("../database/config")

function dadosUsuario(dados) {
    
    var instrucaoSql = `
        SELECT u.nome AS Nome,
            CONCAT(
                DATE_FORMAT(u.dtNasc, '%d'), ' de ',
                CASE DATE_FORMAT(u.dtNasc, '%m')
                    WHEN '01' THEN 'Janeiro'
                    WHEN '02' THEN 'Fevereiro'
                    WHEN '03' THEN 'Março'
                    WHEN '04' THEN 'Abril'
                    WHEN '05' THEN 'Maio'
                    WHEN '06' THEN 'Junho'
                    WHEN '07' THEN 'Julho'
                    WHEN '08' THEN 'Agosto'
                    WHEN '09' THEN 'Setembro'
                    WHEN '10' THEN 'Outubro'
                    WHEN '11' THEN 'Novembro'
                    WHEN '12' THEN 'Dezembro'
                END, ' de ',
                CASE DATE_FORMAT(u.dtNasc, '%y')
                    WHEN '60' THEN '1960' WHEN '61' THEN '1961' WHEN '62' THEN '1962' WHEN '63' THEN '1963' WHEN '64' THEN '1964' WHEN '65' THEN '1965' WHEN '66' THEN '1966' WHEN '67' THEN '1967' WHEN '68' THEN '1968' WHEN '69' THEN '1969'
                    WHEN '70' THEN '1970' WHEN '71' THEN '1971' WHEN '72' THEN '1972' WHEN '73' THEN '1973' WHEN '74' THEN '1974' WHEN '75' THEN '1975' WHEN '76' THEN '1976' WHEN '77' THEN '1977' WHEN '78' THEN '1978' WHEN '79' THEN '1979'
                    WHEN '80' THEN '1980' WHEN '81' THEN '1981' WHEN '82' THEN '1982' WHEN '83' THEN '1983' WHEN '84' THEN '1984' WHEN '85' THEN '1985' WHEN '86' THEN '1986' WHEN '87' THEN '1987' WHEN '88' THEN '1988' WHEN '89' THEN '1989'
                    WHEN '90' THEN '1990' WHEN '91' THEN '1991' WHEN '92' THEN '1992' WHEN '93' THEN '1993' WHEN '94' THEN '1994' WHEN '95' THEN '1995' WHEN '96' THEN '1996' WHEN '97' THEN '1997' WHEN '98' THEN '1998' WHEN '99' THEN '1999'
                    WHEN '00' THEN '2000' WHEN '01' THEN '2001' WHEN '02' THEN '2002' WHEN '03' THEN '2003' WHEN '04' THEN '2004' WHEN '05' THEN '2005' WHEN '06' THEN '2006' WHEN '07' THEN '2007' WHEN '08' THEN '2008' WHEN '09' THEN '2009'
                    WHEN '10' THEN '2010'
                END
            ) AS Nascimento,
            u.email AS Email,
            e.nome AS Estilo
        FROM 
            usuario u JOIN estilo_sertanejo e ON u.fkEstilo = e.idEstilo;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    dadosUsuario
};