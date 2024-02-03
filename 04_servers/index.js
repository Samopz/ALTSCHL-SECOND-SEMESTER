const http = require('http');

// behavior
const behavior = (req, res) => {
};

// create a server
const server = http.createServer(behavior);


// listen on a port
server.listen(8000, () => {
    console.log('Server is running on port 8000')
});


// http://localhost:8000/books/title=Alchemist&pages=200
// scheme -> http
// host -> localhost
// port -> 8000
// path -> /books
// query -> ?title=Alchemist&pages=200
// -title=Alchemist
// - pages=200
