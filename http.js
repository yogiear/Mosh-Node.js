const http = require('http');
const port = 3000;
// const fs = require('fs')

const server = http.createServer(function(req, res) {
  if (req.url === '/') {
      res.write('Hello World');
      res.end();
  }
  
  if (req.url === '/api/courses') {
      res.write(JSON.stringify([1, 2, 3]));
      res.end();
  }
});

server.listen(port);

console.log('Listening on port 3000 ...')