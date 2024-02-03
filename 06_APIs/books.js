const { generateRandomString } = require("./utils/helper.util");

function books(req, res) {
  console.log(generateRandomString(10));
  // crud operations
  //create, read, update, delete
  // POST, GET, PUT, DELETE
  // POST /books
  if (req.method === "POST") {
    // create a book
  }
  // GET /books
  if (req.method === "GET") {
    //get all books
  }
  // GET /books/:id
  if (req.method === "GET") {
    // get a books by id
  }
  // PUT /books/:id
  if (req.method === "PUT") {
    // update a books by id
  }
  // DELETE /books/:id
  if (req.method === "DELETE") {
    // delete a books by id
  }
  res.write("Books API");
}

module.exports = books; // default export
