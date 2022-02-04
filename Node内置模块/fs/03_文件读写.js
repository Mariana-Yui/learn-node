const fs = require('fs');
const path = require('path');

const filename = path.resolve(__dirname, './abc.txt');

// a|append w|write时默认 r|read时默认 +|不存在则创建
fs.writeFile(filename, '你好啊, 李银河', { flag: 'a', encoding: 'utf-8' }, (err) => {
  if (err) {
    console.log(err);
  }
});

// 默认read输出的是二进制buffer, 需要指定encoding让buffer编码输出
fs.readFile(filename, { encoding: 'utf-8' }, (err, data) => {
  console.log(data);
  process.stdout.write(data);
});
