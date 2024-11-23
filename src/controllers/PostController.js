const fs = require('fs');
const path = require('path');
const PostsModel = require('../models/PostsModel');

const mimeTypeMap = {
    "image/png": 'png',
    "image/jpg": 'jpg',
    "image/jpeg": 'jpeg',
    "image/webp": 'webp',
    "image/jfif": "jfif"
};

const CreatePost = async (request, response) => {
    let {type, mime, content} = request.body.image;
    let {user_id, title} = request.body;

    try {
        let directory = path.resolve('static/images');
        let filename = Math.random().toString(16).slice(2);

        if(!fs.existsSync(directory)) {
            fs.mkdirSync(directory, {recursive: true});
        }

        if(!content || !type) {
            throw new Error("Body inválido");
        }

        if(type === 'base64') {
            if(!mime) {
                throw new Error("mime é obrigatorio para o type base64");
            }
            
            let extension = mimeTypeMap[mime];
            if(!extension) {
                throw new Error("Mime inválido");
            }

            filename = `${filename}.${extension}`;
            fs.writeFileSync(`${directory}/${filename}`, atob(content), {
                encoding: 'binary'
            });
        }
        
        if(type === 'url') {
            let response = await fetch(content);
            let mimeType = response.headers.get('content-type');
            let extension = mimeTypeMap[mimeType];
            if(!extension) {
                throw new Error("Tipo de arquivo da url inválido");
            }
            let buffer = await response.arrayBuffer();
            buffer = Buffer.from(buffer, 'binary');
            filename = `${filename}.${extension}`;
            fs.writeFileSync(`${directory}/${filename}`, buffer, {
                encoding: 'binary'
            });
        }

        let post = await PostsModel.create({
            user_id,
            title,
            image: filename
        });

        return response.json(post);
    } catch (error) {
        console.log(error.message);
        response.status(400);
        return response.json({message: error.message});
    }
}

module.exports = {
    CreatePost
};