function authors(req, res) {
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
  res.send("Books API");
}

module.exports = authors; // default exports