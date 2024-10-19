const express = require("express");
const app = express();
const fs = require('fs');
const {
    ListUsers, UserById, CreateUser, UpdateUser, DeleteUser
} = require('./controllers/UserController');

app.get('/', (request, response) => {
    response.end("Api backend do blog 2");
});

app.get('/users', ListUsers);
app.get('/users/:id', UserById);
app.post('/users', CreateUser);
app.put('/users/:id', UpdateUser);
app.delete('/users/:id', DeleteUser);














/**
 * Exemplo de rota que retorna o conteudo frontend
 */
app.get('/contato', (request, response) => {
    let content = fs.readFileSync(__dirname + '/view/contato.html');
    response.end(content);
});

app.listen(3000);   