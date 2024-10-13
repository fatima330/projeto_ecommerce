const express = require('express');
const bodyParser = require('body-parser');
const path = require('path'); // Para servir arquivos estáticos
const connection = require('./db'); // Importa a conexão do db.js

const app = express();
const port = 3000;

// Middleware para processar *JSON
app.use(bodyParser.json()); 

// *Middleware para servir arquivos estáticos
app.use(express.static(path.join(__dirname, 'assets'))); // Para servir arquivos CSS da pasta 'assets'
app.use(express.static(path.join(__dirname, 'scripts'))); // Para servir arquivos JS da pasta 'scripts'

// Rota para a raiz
app.get('/', (req, res) => {
    res.redirect('/login.html'); // Redireciona para a página de login
});

// Rota para servir o arquivo de login
app.get('/login.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'login.html'));
});

// Rota para servir o arquivo de registro
app.get('/register.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'register.html'));
});

// Rota de registro
app.post('/register', (req, res) => {
    const { username, password, email, telefone } = req.body;
    const sql = 'INSERT INTO users (username, password, email, telefone) VALUES (?, ?, ?, ?)';
    
    connection.query(sql, [username, password, email, telefone], (err, results) => {
        if (err) {
            return res.status(500).send('Erro ao registrar usuário');
        }
        res.status(201).send('Usuário registrado com sucesso!');
    });
});

// Rota de login
app.post('/login', (req, res) => {
    const { username, password } = req.body;
    const sql = 'SELECT * FROM users WHERE username = ? AND password = ?';
    
    connection.query(sql, [username, password], (err, results) => {
        if (err) {
            return res.status(500).send('Erro ao fazer login');
        }
        if (results.length > 0) {
            res.send('Login bem-sucedido!');
        } else {
            res.status(401).send('Credenciais inválidas');
        }
    });
});

// Inicializa o servidor
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
