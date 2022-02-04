const path = require('path');
const filepath = '/User/denis/h.txt';

console.log(path.dirname(filepath));
console.log(path.basename(filepath));
console.log(path.extname(filepath));

const dirname = '/User/denis';
const filename = './h.txt';
const othername = '/other.js';

// path.join 不会识别 / 根路径, 如果最前不是绝对路径生成的就是相对路径
console.log(path.join(dirname, filename, othername));

// path.resolve 会识别 / 等信息, 生成永远都是绝对路径
console.log(path.resolve(dirname, filename, othername));
// path.join和path.resolve都会识别 ./ ../
