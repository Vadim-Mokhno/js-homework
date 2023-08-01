const http = require('http');
const express = require('express');
const app = express();
const cors = require('cors');
const PORT = 5000;

app.use(cors());
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/books.json');
});

app.listen(PORT, () => console.log('Server is starting on port:' + PORT));
