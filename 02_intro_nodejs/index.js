// create a simple server in nodejs

// import http module
const http = require("http");
const path = require("path");
const fs = require("fs");
const os = require("os")

// ./src/images/cat.jpg
// ../src/images/cat.jpg

// create a server
const server = http.createServer((req, res) => {
  // console.log(req.headers);
  // console.log(process.env.NODE_ENV);
  // console.log(os.platform());
  console.log(req.url);
  console.log(req.method);
  if (req.url === "/") {
    res.write("Hello World");
    res.end();
  } else if (req.url === "/hello") {
    res.write("Hello AltSchooler!");
    res.end();
  } else if (req.url === "/read") {
    fs.readFile("./hello.txt", (err, data) => {
      if (err) {
        console.log(err);
      } else {
        res.write(data);
        res.end();
      }
    });
  } else {
    res.write("404 not found - we don't know what you looking for!");
    res.end();
  }
  // console.log(path.dirname(__filename) + "/index.js");
  // fs.mkdir(path.dirname(__filename) + "/test", (err) => {
  //   if (err) {
  //     console.log(err)
  //   } else {
  //     console.log("folder created");
  //   }
  // })
  // res.end("Hello from the server! Welcome AltSchooler!");
});

server.listen(8000, null, null, () => {
  console.log("Server is running on port 8000");
});

// create a server object
// http.createServer(function (req, res) {
//     res.write("Hello World!"); //write a response to the client
//     res.end(); //end a response
// }).listen(8000)
