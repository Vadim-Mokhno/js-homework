const http = require('http');
const { greetUser } = require('./personalmodule');
const os = require('os');
const server = http.createServer((req, res) => {
  res.end(greetUser(os.userInfo().username));
});
const PORT = 5000;

server.listen(PORT, () => {
  console.log(`Starting server on port ${PORT}`);
});
