const fs = require('fs');
const img = `/9j/4QDeRXhpZgAASUkqAAgAAAAGABIBAwABAAAAAQAAABoBBQABAAAAVgAAABsBBQABAAAAXgAAACgBAwABAAAAAgAAABMCAwABAAAAAQAAAGmHBAABAAAAZgAAAAAAAABIAAAAAQAAAEgAAAABAAAABwAAkAcABAAAADAyMTABkQcABAAAAAECAwCGkgcAFgAAAMAAAAAAoAcABAAAADAxMDABoAMAAQAAAP//AAACoAQAAQAAAAoAAAADoAQAAQAAAAoAAAAAAAAAQVNDSUkAAABQaWNzdW0gSUQ6IDM0MP/bAEMACAYGBwYFCAcHBwkJCAoMFA0MCwsMGRITDxQdGh8eHRocHCAkLicgIiwjHBwoNyksMDE0NDQfJzk9ODI8LjM0Mv/bAEMBCQkJDAsMGA0NGDIhHCEyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMv/CABEIAAoACgMBIgACEQEDEQH/xAAXAAADAQAAAAAAAAAAAAAAAAAAAQQF/8QAFQEBAQAAAAAAAAAAAAAAAAAAAQL/2gAMAwEAAhADEAAAAcWUcn//xAAZEAEAAgMAAAAAAAAAAAAAAAACAQMQERL/2gAIAQEAAQUCglHm3dOP/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAgBAwEBPwF//8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAgBAgEBPwF//8QAGhAAAgIDAAAAAAAAAAAAAAAAAAIBIRAxcf/aAAgBAQAGPwKqY1Ivcf/EABoQAQADAAMAAAAAAAAAAAAAAAEAETEhofD/2gAIAQEAAT8hPt9A9sUXXFzFW9n/2gAMAwEAAgADAAAAELP/xAAVEQEBAAAAAAAAAAAAAAAAAAAAAf/aAAgBAwEBPxCv/8QAFxEBAAMAAAAAAAAAAAAAAAAAAQARIf/aAAgBAgEBPxC0yf/EABwQAQEAAgIDAAAAAAAAAAAAAAERACExUXGBsf/aAAgBAQABPxAxWiXZr416xwBFUKh4xI1hIXi84NApe8//2Q==`;
let url = 'https://picsum.photos/200/300';
const path = require("path");

const mimeTypeMap = {
    "image/png": 'png',
    "image/jpg": 'jpg',
    "image/jpeg": 'jpeg',
    "image/webp": 'webp',
    "image/jfif": "jfif"
};

async function execute() {
    let response = await fetch(url);
    let mimeType = response.headers.get('content-type');
    let extension = mimeTypeMap[mimeType];
    let buffer = await response.arrayBuffer();
    buffer = Buffer.from(buffer, 'binary');
    console.log(buffer)
    fs.writeFileSync(`teste.${extension}`, buffer, {
        encoding: 'binary'
    });
}

execute();