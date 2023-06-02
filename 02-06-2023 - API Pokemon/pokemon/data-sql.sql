CREATE DATABASE PokemonDB;
USE PokemonDB;

CREATE TABLE Pokemons (
    ID INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    Nome VARCHAR(50),
    Tipo VARCHAR(50),
    Altura DECIMAL(4,2),
    Peso DECIMAL(5,2),
    Geracao INT,
    Descricao TEXT
);

INSERT INTO Pokemons (Nome, Tipo, Altura, Peso, Geracao, Descricao)
VALUES 
('Bulbasaur', 'Planta', 0.7, 6.9, 1, 'Um Pokémon semente que adora tomar sol. Seu bulbo nasce com uma semente plantada nele.'),
('Charmander', 'Fogo', 0.6, 8.5, 1, 'Tem preferência por coisas quentes. Quando chove, diz-se que o vapor jorra da ponta da cauda.'),
('Squirtle', 'Água', 0.5, 9.0, 1, 'Depois do nascimento, sua volta é inchada e revestida por uma carapaça. Pode pulverizar espuma da boca.'),
('Pikachu', 'Elétrico', 0.4, 6.0, 1, 'Pikachu, que pode gerar eletricidade poderosa, tem sacos nas bochechas que são extremamente macios e super elásticos.'),
('Jigglypuff', 'Normal', 0.5, 5.5, 1, 'Jigglypuff possui pulmões grandes que podem inflar para se tornar redondos e macios. Eles colocam oponentes para dormir, cantando uma canção de ninar.'),
('Psyduck', 'Água', 0.8, 19.6, 1, 'Psyduck usa um poder misterioso. Quando ele faz, sua dor de cabeça se intensifica.'),
('Arcanine', 'Fogo', 1.9, 155.0, 1, 'Arcanine é conhecido por correr alegremente enquanto derrama chamas pelo corpo.'),
('Machop', 'Lutador', 0.8, 19.5, 1, 'Machop é superpoderoso. Ele pode lançar cem adultos.'),
('Tentacool', 'Água', 0.9, 45.5, 1, 'Tentacool absorve luz solar e reflete-a com um brilho vermelho.'),
('Geodude', 'Pedra', 0.4, 20.0, 1, 'Geodude usa sua dura cabeça para perfurar boulders.'),
('Ponyta', 'Fogo', 1.0, 30.0, 1, 'Ponyta é um Pokémon muito fraco ao nascer. Ela mal consegue ficar em pé. Este Pokémon se torna mais forte batendo as pernas e correndo.'),
('Slowpoke', 'Água', 1.2, 36.0, 1, 'Slowpoke usa sua cauda para pegar presas mergulhando-a na água na beira da água.'),
('Magnemite', 'Elétrico', 0.3, 6.0, 1, 'Magnemite se conecta a linhas de transmissão de energia para alimentar sua necessidade geral de eletricidade.'),
('Doduo', 'Normal', 1.4, 39.2, 1, 'Doduo vive em pastagens abertas. Aves que são inativas na estação fria são conhecidas por serem Doduo.'),
('Seel', 'Água', 1.1, 90.0, 1, 'Seel procura comida enquanto nada no ritmo de seus movimentos de remo.'),
('Grimer', 'Veneno', 0.9, 30.0, 1, 'Grimer nasceu de lodo que foi transformado pela exposição a raios-X da lua.'),
('Shellder', 'Água', 0.3, 4.0, 1, 'Shellder é protegido por uma concha dura. Abrir essa concha apenas é possível quando está relaxado.'),
('Gastly', 'Fantasma', 1.3, 0.1, 1, 'Gastly é composto principalmente de gás venenoso.'),
('Onix', 'Pedra', 8.8, 210.0, 1, 'Onix tem um imã em seu cérebro. Ele age como um compasso para que este Pokémon não perca a direção enquanto está cavando.'),
('Drowzee', 'Psíquico', 1.0, 32.4, 1, 'Drowzee põe seus inimigos para dormir e come seus sonhos. Aparentemente, quanto mais o Drowzee come, mais feliz fica.');

select * from Pokemons;