
const express = require('express');
const mysql   = require('mysql');
const app     = express();
const cors    = require('cors');
const port    = 3000;

// Configuração do MySQL
const banco = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'PokemonDB'
});

banco.connect((err) => {
  if (err) throw err;
  console.log('Conectado ao banco de dados!');
});

app.use(cors());

// API Endpoint
app.get('/pokemons', (req, res) => {
  banco.query('SELECT * FROM Pokemons', (err, result) => {
    if (err) throw err;
    res.send(result);
  });
});

app.listen(port, () => {
  console.log(`API rodando em http://localhost:${port}`);
});
