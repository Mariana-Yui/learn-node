const fs = require('fs');
const path = require('path');

const filename = path.resolve(__dirname, './abc.txt');
fs.open(filename, (err, fd) => {
  if (err) {
    return console.log(err);
  }

  fs.fstat(fd, (err, stat) => {
    console.log(stat);
  });

  fs.read(fd, (err, bytes, data) => {
    console.log(data.toString());
  });
});
