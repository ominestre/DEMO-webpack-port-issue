#!/usr/bin/node

const http = require('http');

const server = http.createServer((req, res) => {
  res.end('THIS IS NOT THE WEBPACK DEV SERVER', 'utf-8');
});

const killServer = () => {
  server.close((err) => {
    console.error(err);
    process.exit(1);
  });
};

process.on('SIGINT', killServer);
process.on('SIGTERM', killServer);
process.on('SIGQUIT', killServer);

server.listen(9876, '::1', () => {
  console.log('IPv6 server listening on port 9876');
});