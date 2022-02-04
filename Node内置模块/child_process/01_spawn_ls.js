const { spawn } = require('child_process');

const ll = spawn('ls', ['-lh']);
let data = [];

ll.on('close', (code) => {
  console.log('exit code:', code); // 正常退出退出码CODE: 0
  const output = Buffer.concat(data).toString('utf-8');
  console.log(output);
});

ll.stdout.on('data', (chunk) => {
  data.push(chunk);
});
