const http = require('http');

const requestListener = (request, response) => {
  response.writeHead(200);
  response.end('Hello, World!');
};

const server = http.createServer(requestListener);

const port = 8080;

function startServer(){
  server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  }).on('error', (err) => {
    if (err.code === 'EADDRINUSE') {
      console.error(`Port ${port} is already in use, retrying...`);
      setTimeout(startServer, 1000);
    } else {
      console.error(`Failed to start server: ${err}`);
    }
  });
}

startServer();