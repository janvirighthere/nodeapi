const htttp = require('http');
const app = require('./app');
const PORT = process.env.PORT || 3000;

const server = htttp.createServer(app);

server.listen(PORT);
