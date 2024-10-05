const express = require("express");
const app = express();
const fs = require('fs');

app.get('/post/:slug', (request, response) => {
    let slug = request.params.slug;
    response.json({
        title: slug
    });
});














/**
 * Exemplo de rota que retorna o conteudo frontend
 */
app.get('/contato', (request, response) => {
    let content = fs.readFileSync(__dirname + '/view/contato.html');
    response.end(content);
});

app.listen(3000);   