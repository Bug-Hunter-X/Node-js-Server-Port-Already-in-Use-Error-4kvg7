const http = require('http');

const requestListener = (request, response) => {
  response.writeHead(200);
  response.end('Hello, World!');
};

const server = http.createServer(requestListener);

server.listen(8080); //this will throw an error if the port is already in use
console.log('Server is running on port 8080');

// The above code works fine if the port 8080 is not in use.
// If the port 8080 is already in use, then the server.listen(8080) will throw an error.
// The error will be 'Error: listen EADDRINUSE: address already in use :::8080'.
//This error is not very common, but it can happen if you are running multiple Node.js servers on the same machine.