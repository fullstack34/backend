const fs = require('fs');
const img = require("./img");
let url = 'https://picsum.photos/200/300';

async function execute() {
    let decode = atob(img);
    fs.writeFileSync('teste.png', decode, {
        encoding: 'binary',
    });
}

execute();