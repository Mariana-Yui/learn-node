const fs = require('fs');
const path = require('path');

const dirname = path.resolve(__dirname, 'kobe');

// fs.exist已被废弃
if (!fs.existsSync(dirname)) {
  fs.mkdir(dirname, (err) => {
    console.log(err);
  });
}

// withFileType就不用fs.stat遍历files那么麻烦了
// 区别是从原先的string[]变成了fs.Dirent[]
function traverseDir(dirname) {
  fs.readdir(dirname, { withFileTypes: true }, (err, files) => {
    files.forEach((file) => {
      if (file.isDirectory()) {
        const dirpath = path.resolve(dirname, file.name);
        traverseDir(dirpath);
      } else {
        console.log(file.name);
      }
    });
  });
}
traverseDir(dirname);

// fs.rename(dirname, path.resolve(__dirname, 'kobe'), (err) => {
//   console.log(err);
// });
