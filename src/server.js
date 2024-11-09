const express = require("express");
const cors = require('cors');
const app = express();
app.use(express.json());
app.use(cors());
const fs = require('fs');
const {
    ListUsers, UserById, CreateUser, UpdateUser, DeleteUser
} = require('./controllers/UserController');

const {
    CreatePost
} = require('./controllers/PostController');

app.get('/', (request, response) => {
    response.end("Api backend do blog 2");
});

app.get('/users', ListUsers);
app.get('/users/:id', UserById);
app.post('/users', CreateUser);
app.put('/users/:id', UpdateUser);
app.delete('/users/:id', DeleteUser);

app.post("/posts", CreatePost);














/**
 * Exemplo de rota que retorna o conteudo frontend
 */
app.get('/contato', (request, response) => {
    let content = fs.readFileSync(__dirname + '/view/contato.html');
    response.end(content);
});

app.listen(3000);   