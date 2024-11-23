const path = require('path');
const fs = require('fs');

const getBasePath = (folders = '') => {
    return path.resolve(folders);
}

const getStaticPath = (path = '') => {
    return getBasePath(`${process.env.STATIC_DIR}/${path}`);
}

const getImagesPath = (path = '') => {
    return getStaticPath(`images/${path}`);
}

const pathExists = (path = '') => {
    return fs.existsSync(path);
}

const imageExists = (path = '') => {
    path = getImagesPath(path);
    return pathExists(`${path}`);
}

const makeDirIfNotExists = (path = '') => {
    if(!fs.existsSync(path)) {
        fs.mkdirSync(path, {recursive: true});
    }
}

module.exports = {
    getBasePath,
    getImagesPath,
    pathExists,
    imageExists,
    makeDirIfNotExists
}