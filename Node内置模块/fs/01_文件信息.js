const fs = require('fs');
const path = require('path');

const filename = path.resolve(__dirname, './abc.txt');

const info = fs.statSync(filename);
console.log(info);

fs.stat(filename, (err, data) => {
  if (err) {
    return console.log(err);
  }
  console.log(data);
});

fs.promises
  .stat(filename)
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });
