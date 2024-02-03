const http = require("http");

function getBodyFromStream(req, res, cb) {
    return Promise.resolve((resolve, reject) => {
        const data = [];
        req.on("data", (chunk) => {
            data.push(chunk);
        });
        req.on("end", () => {
            const body = Buffer.concat(data).toString();
            if (body) {
                // assuming that body is JSON object
                resolve(JSON.parse(body));
                return;
            }
            resolve({});
        });
        req.on("error", (err) => {
            reject(err);
        });
    });
};

function Authenticate(req, res, next) {
    console.log("Authenticate");
    const username = "oovi;"
    const password = "1234";

    if (req.body.username !== username || req.body.password !== password) {
        res.statusCode = 401;
        res.end();
        return;
    }
    next(req, res);
}

function getBooks(req, res) {
  console.log("getBooks", req.body);
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify({ books: [{name: "Harry Potter"}] }));
}

function getAuthors(req, res) {
    console.log("getAuthors", req.body);
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify({ authors: [{name: "J.K. Rowling"}] }));
    }

const server = http.createServer(async (req, res) => {
    //   getBodyFromStream(req, res, getBooks);
    try {
        const body = await getBodyFromStream(req);
        req.body = body;
        // console.log("req.body", req.body); 
        if (req.url === "/books") {
            Authenticate(req, res, getBooks);
        }
        if (req.url === "/authors") {
            Authenticate(req, res, getAuthors);
        }
    } catch (error) {
        req.statusCode = 500;
        req.end(error.message);
    }
});

server.listen(3000, () => {
  console.log("Server is running on port 3000");
});


// 1:07:58hrs