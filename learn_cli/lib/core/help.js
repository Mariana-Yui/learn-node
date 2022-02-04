const { program } = require('commander');

const helpOptions = () => {
  program.option('-m --mariana', 'a mariana cli');
  // program.option('-d --dest <dest>', 'a destination folder, 例如: -d /src/components'); // <>会作为program的属性
  program.option('-f --framewrok <framework>', 'your frameword');

  // program.on('option:dest', function () {
  //   // 这里如果要使用this,不能用箭头函数
  //   console.log(this.opts().dest);
  // });
};

module.exports = helpOptions;
