create database theRanch;

use theRanch;

create table artistas (
idArtista int primary key auto_increment,
nome varchar(45),
banner varchar(100),
biografia text,
dtNasc varchar(50),
localNasc varchar(45),
atividade varchar(20),
algumasMusicas varchar(150),
foto varchar(100),
principalHit varchar(100),
spotify int,
youtube int 
);

insert into artistas values
(default, 
'Cristiano Araújo', 
'style/assets/images/cantor_específico/universitarios_solo/cristianoAraujo.png',
'Cristiano Araújo nasceu em Goiânia, Goiás, no dia 24 de janeiro de 1986 numa família de músicos. Com quatro anos já gostava de cantar e segundo seu pai, José Reis de Araújo, mostrava ser afinado. Com seis anos ganhou seu primeiro violão e com nove anos começou a se apresentava em público.
    Com 13 anos gravou seu primeiro CD. Sua carreira deslanchou em 2011, a partir da música “Efeitos”. Com mais de 250 milhões de acessos em seu canal oficial no YouTube. Cristiano gravou dois álbuns em estúdio e três ao vivo, além de três DVDs. Cumpria uma agenda de 280 shows por ano. Entre seus sucessos destacam-se: "Efeitos", "Bara Bara", "Você Mudou", "Maus Bocados", "Cê Que Sabe", "Hoje Eu Tô Terrível".
     No dia 24 de junho de 2015, ao regressar de um show que fez na cidade de Itumbiara, estava deitado no banco traseiro de sua Ranger Rouver, ao lado de sua namorada Allana Moraes, de 19 anos, quando, na BR – 153, o carro saiu da pista e capotou. Allana teve morte imediata. Cristiano chegou a ser socorrido, mas não resistiu. Faleceu com apenas 29 anos, no auge do sucesso de sua carreira musical.',
'24 de Janeiro de 1986',
'Goiânia-GO',
'1995 - 2015',
'Efeitos - 2011 / Maus Bocados - 2013 / Cê Que Sabe? - 2014',
'style/assets/images/fotos_cantores/universitario_solo/cristianoAraujo.png',
'Caso Indefinido - 2013',
'139',
'383'),
(default, 'Enzo Rabelo',
'style/assets/images/cantor_específico/universitarios_solo/enzoRabelo.png',
'Enzo Rabelo é um jovem cantor e compositor brasileiro que vem conquistando o cenário musical com seu talento precoce. Filho do cantor Bruno, da dupla Bruno & Marrone, Enzo iniciou sua carreira artística aos 10 anos, em 2018, ao publicar vídeos cantando no YouTube. Seu estilo musical transita entre o sertanejo romântico e o pop, cativando uma ampla audiência. Com uma voz marcante e presença de palco, ele rapidamente ganhou notoriedade, acumulando milhões de visualizações em suas músicas. Enzo já colaborou com artistas renomados como Zé Felipe e Gusttavo Lima, ampliando ainda mais seu alcance. Em 2020, lançou seu primeiro DVD ao vivo, gravado em Uberlândia, Minas Gerais. Desde então, continua ativo na música, lançando novos projetos e singles que reforçam sua posição como uma das promessas da nova geração do sertanejo. Além da música, Enzo também é influente nas redes sociais, compartilhando sua rotina e novidades com seus seguidores. Seu carisma e dedicação indicam uma carreira promissora pela frente.',
'24 de Outubro de 2024',
'Goianápolis – GO',
'2018 - presente',
'Meio caminho andado - 2022 / Perfeitinha - 2023 / 2% - 2023',
'style/assets/images/fotos_cantores/universitario_solo/enzoRabelo.png',
'Tijolinho por Tijolinho (feat. Zé Felipe) - 2018',
'63',
'435'),
(default, 'Felipe Araújo',
'style/assets/images/cantor_específico/universitarios_solo/felipeAraujo.png',
'Felipe Araújo é um cantor e compositor brasileiro de sertanejo, conhecido por sua voz marcante e por emplacar vários hits nas paradas. Ele é irmão do saudoso Cristiano Araújo, cantor que faleceu em 2015. Inspirado pelo irmão e pela paixão pela música, Felipe decidiu seguir carreira solo ainda em 2015. Seu estilo mistura o sertanejo romântico com toques modernos do sertanejo universitário. Com carisma e presença de palco, ele rapidamente conquistou o público. Seu primeiro grande sucesso foi “A Mala é Falsa”, parceria com Henrique & Juliano. Desde então, lançou vários singles que se destacaram nas rádios e plataformas digitais. Felipe também é conhecido por suas apresentações emocionantes e pelo cuidado com sua imagem artística. Com uma trajetória sólida, ele já se consolidou como um dos nomes fortes da nova geração do sertanejo. Atualmente, segue ativo na música, lançando novos projetos e turnês.',
'02 de julho de 1995',
'Goiânia - GO',
'2015 – presente',
'A Mala é Falsa – 2016 / Espaçosa Demais” – 2019 / Amor da Sua Cama – 2017',
'style/assets/images/fotos_cantores/universitario_solo/felipeAraujo.png',
'Atrasadinha (feat Ferrugem) - 2018',
'275',
'500');

select * from artistas;

select * from artistas where nome = 'Cristiano Araújo';

SELECT DATE_FORMAT(dtNasc , '%d de %m de %y') FROM artistas  WHERE nome = "Cristiano Araújo";


