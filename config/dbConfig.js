const mysql = require('mysql2');


const db = mysql.createConnection({
    host: 'localhost',
    user: 'root' ,
    password: '123456' ,
    database: 'testdb'
});


db.connect((error) => {
    if (error) {
        console.error('Erro ao conectar ao banco de dados:', error);
    } else {
        console.log('Conexão com o banco de dados estabelecida.');
    }
});


module.exports = db;
