import fs from 'fs';

const getStorage = () => {
    let fileContent = fs.readFileSync("./storage/storage.json", "utf8");
    return JSON.parse(fileContent);
}


export default getStorage;