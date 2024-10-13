const mysql = require('mysql2');

// Configurações de conexão
const connection = mysql.createConnection({
    host: 'localhost',  // Endereço do servidor MySQL
    user: 'root', // Seu usuário MySQL
    password: '180797F@tima', // Sua senha MySQL
    database: 'usuarios' // Nome do banco de dados
});

// Conectar ao banco de dados
connection.connect((err) => {
    if (err) {
        console.error('Erro ao conectar ao banco de dados:', err.stack);
        return;
    }
    console.log('Conectado ao banco de dados como ID', connection.threadId);
});

module.exports = connection; // Exporta a conexão para uso em outros arquivos
