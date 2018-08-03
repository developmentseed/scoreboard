/* eslint-disable global-require */

const opts = { stdio: 'inherit', cwd: 'api', shell: true }
if (process.env.NODE_ENV === 'staging' || process.env.NODE_ENV === 'production') {
  require('child_process').spawn('npm', ['start'], opts)
}
else {
  require('child_process').spawn('npm', ['run', 'start-dev'], opts)
}
