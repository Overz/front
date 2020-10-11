const app = require('./app');
const env = require('env-var');

const HOST = env.get('HOST').asString() || '0.0.0.0';
const PORT = env.get('PORT').asString() || '3000';

const start = async () => {
  app.listen(PORT, HOST, () => {
    console.log(`Running on port ${PORT}`);
  });
};

const finish = async () => {
  process.exit();
};

process.on('SIGINT', finish);
process.on('SIGTERM', finish);

start();
