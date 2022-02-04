const { spawn } = require('child_process');

const cloneRepo = spawn('git', ['clone', 'git@github.com:Mariana-Yui/learn-node.git']);

cloneRepo.on('close', (code) => {
  console.log('exit code: ', code);
});
