const http = require('http');
const port = process.env.PORT || 6969;
const server = http.createServer();
const app =require('.app');

server.listen(port);