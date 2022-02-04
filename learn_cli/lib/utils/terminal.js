const { spawn } = require('child_process');

const commandSpawn = (...args) => {
  return new Promise((resolve, reject) => {
    const subChildProcess = spawn(...args);
    // spawn()会另起一个进程, 那个进程的输出在当前进程是看不到的, 所以需要pipe
    subChildProcess.stdout.pipe(process.stdin);
    subChildProcess.stderr.pipe(process.stderr);
    subChildProcess.stdout.on('end', (code) => resolve(code));
    subChildProcess.on('error', (err) => reject(err));
  });
};

module.exports = {
  commandSpawn,
};
