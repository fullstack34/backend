const fs = require('fs');

const CreatePost = async (request, response) => {
    try {
        let base64 = request.body.image.content;
        base64 = atob(base64);
        fs.writeFileSync('teste.jpg', base64, {
            encoding: 'binary'
        });
        return response.json("Post criado");
    } catch (error) {
        console.log(error.message);
        response.status(400);
        return response.json({message: "Erro ao criar post"});
    }
}

module.exports = {
    CreatePost
};