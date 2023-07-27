const http = require('http');
const os = require('os');
const path = require('path');
const server = http.createServer((req, res) => {
  res.write('<h1>System information</h1>');
  res.write(`Current user name: ${os.userInfo().username}<br>`);
  res.write(`OS type: ${os.type()}<br>`);
  res.write(`System work time: ${(os.uptime() / 60).toFixed(2)} minutes<br>`);
  res.write(`Current work directory: ${path.dirname(__filename)}<br>`);
  res.write(`Server file name: ${path.basename(__filename)}<br>`);
  res.end('');
});
const PORT = 5000;

server.listen(PORT, () => {
  console.log(`Starting server on port ${PORT}`);
});
