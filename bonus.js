const http = require('http');
const fs = require('fs');
const filePath = './user-input.txt';
const { writeToTextFile, readFromTextFile } = require('./personalmodule');
const PORT = 5000;
const server = http.createServer(async (req, res) => {
  await writeToTextFile(filePath, req.headers.host + req.url);
  res.end(await readFromTextFile(filePath));
});
server.listen(PORT, () => {
  console.log(`Starting server on port ${PORT}`);
});
