const { spawn } = require('child_process');

const more = spawn('more', ['./paper.md']);
const grep = spawn('grep', ['美丽']);

more.stdout.on('data', (chunk) => {
  grep.stdin.write(chunk);
});

more.on('close', (code) => {
  console.log('read paper.md done: ', code);
  grep.stdin.end();
});

grep.stdout.on('data', (chunk) => {
  console.log('grep: ', chunk.toString('utf8'));
});

grep.on('close', function (code) {
  if (code !== 0) {
    console.log('grep exists with code: ' + code);
  }
});
