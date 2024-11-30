const fs = require('fs');
const {getExtensionByMimeType} = require('../ultils/MimeTypeMap');
const {getImagesPath} = require('../ultils/PathHandler');

const saveByBase64 = (filename, base64String, mimeType) => {
    let extension = getExtensionByMimeType(mimeType);
    filename = `${filename}.${extension}`
    console.log("IMAGE UPLOAD", filename); 
    fs.writeFileSync(getImagesPath(filename), atob(base64String), {
        encoding: 'binary'
    });

    return filename;
}

const saveByUrl = async (filename, url) => {
    let response = await fetch(url);
    let mimeType = response.headers.get('content-type');
    let extension = getExtensionByMimeType(mimeType);
    if(!extension) {
        throw new Error("Tipo de arquivo da url inválido");
    }
    let buffer = await response.arrayBuffer();
    buffer = Buffer.from(buffer, 'binary');
    filename = `${filename}.${extension}`;
    fs.writeFileSync(getImagesPath(filename), buffer, {
        encoding: 'binary'
    });

    return filename;
}

module.exports = {
    saveByBase64,
    saveByUrl
}