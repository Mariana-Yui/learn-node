const { exec } = require('child_process');

exec('ls -lh', (err, stdout, stderr) => {
  console.log('err: ', err);
  console.log('stdout: ', stdout);
  console.log('stderr: ', stderr);
});
