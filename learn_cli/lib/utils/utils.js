const ejs = require('ejs');
const path = require('path');
const fs = require('fs');

const compile = (template, renderData) => {
  const filename = `../templates/${template}`;
  const pathname = path.resolve(__dirname, filename);
  return new Promise((resolve, reject) => {
    ejs.renderFile(pathname, renderData, (err, str) => {
      if (err) {
        console.log(err);
        reject(err);
      }
      resolve(str);
    });
  });
};

const generateTargetDirSync = (dirPath) => {
  if (fs.existsSync(dirPath)) {
    return true;
  }
  generateTargetDirSync(path.dirname(dirPath));
  if (fs.existsSync(path.dirname(dirPath))) {
    fs.mkdirSync(dirPath);
  }
  return true;
};

const writeToFile = (path, data) => {
  return fs.promises.writeFile(path, data);
};

module.exports = {
  compile,
  writeToFile,
  generateTargetDirSync,
};
