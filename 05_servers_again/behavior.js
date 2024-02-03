
const behavior = (req, res) => {
  switch (req.url) {
    case "/":
      res.write("Hello from page root");
      break;
    case "/about":
      res.write("Hello from page about");
      break;
    case "/contact":
      res.write("Hello from page contact");
      break;
    default:
      res.write("Hello from page" + req.url);
      break;
  }
  res.end();
};

module.exports = behavior;
// module.exports = {behavior}