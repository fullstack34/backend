const mimeTypeMap = {
    "image/png": 'png',
    "image/jpg": 'jpg',
    "image/jpeg": 'jpeg',
    "image/webp": 'webp',
    "image/jfif": "jfif",
    "image/svg+xml": "svg"
};

const getExtensionByMimeType = (mimeType) => {
    let extension = mimeTypeMap[mimeType];
    if(!extension) {
        throw new Error("MimeType inválido");
    }
    return extension;
}

module.exports = {
    mimeTypeMap,
    getExtensionByMimeType
}