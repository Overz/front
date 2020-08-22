const express = require('express');

const HOST = process.env.HOST || '0.0.0.0';
const PORT = process.env.PORT || '3000';

const app = express();

app.get('/', (req, res) => {
  res.send({ message: 'Hello World' });
});

app.listen(PORT, HOST, () => {
  console.log(`Running on port ${PORT}`);
});
