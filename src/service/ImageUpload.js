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

const saveByUrl = () => {}

module.exports = {
    saveByBase64,
    saveByUrl
}