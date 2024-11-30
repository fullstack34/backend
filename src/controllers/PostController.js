const fs = require('fs');
const PostsModel = require('../models/PostsModel');
const {getImagesPath, makeDirIfNotExists} = require('../ultils/PathHandler');
const {saveByBase64, saveByUrl} = require('../service/ImageUpload');

const CreatePost = async (request, response) => {
    let {type, mime, content} = request.body.image;
    let {user_id, title} = request.body;

    let directory = getImagesPath();
    let filename = Math.random().toString(16).slice(2);

    try {
        makeDirIfNotExists(directory);
        
        if(!content || !type) {
            throw new Error("Body inválido");
        }

        if(type === 'base64') {
            if(!mime) {
                throw new Error("mime é obrigatorio para o type base64");
            }
            filename = saveByBase64(filename, content, mime);
        }
        
        if(type === 'url') {
            filename = await saveByUrl(filename, content);
        }

        let post = await PostsModel.create({
            user_id,
            title,
            image: filename
        });

        return response.json(post);
    } catch (error) {
        filename = `${directory}/${filename}`;
        if(fs.existsSync(filename)) {
            fs.unlinkSync(filename);
        }
        response.status(400);
        return response.json({message: error.message});
    }
}

module.exports = {
    CreatePost
};