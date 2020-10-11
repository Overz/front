const express = require('express');
const path = require('path');

const app = express();

const files = path.join(__dirname, 'public');
const public = express.static(files);

app.use(public);
app.use('/', (req, res) => {
  res.sendFile('index.html', { root: files });
});

module.exports = app;
