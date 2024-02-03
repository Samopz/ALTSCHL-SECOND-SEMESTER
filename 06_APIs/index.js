const http = require("http");
const books = require("./books");
const authors = require("./authors");
const { generateRandomString } = require("./utils/helper.util");

const server = http.createServer((req, res) => {
  console.log(generateRandomString(30));
  if (req.url === "/books") {
    books(req, res);
    // return res.end('Home Page');
  }
  if (req.url === "/authors") {
    authors(req, res);
    // return res.end('Authors Page');
  }
  res.end();
});

server.listen(3000, () => {
  console.log("Server is running on port 3000");
});

