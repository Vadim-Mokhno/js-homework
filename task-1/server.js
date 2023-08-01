const http = require('http');
const express = require('express');
const app = express();
const cors = require('cors');
const PORT = 5000;

app.use(cors());
app.get('/', (req, res) => {
  res.status(200).json(JSON.stringify(new Date()));
});

app.listen(PORT, () => console.log('Server is starting on port:' + PORT));
