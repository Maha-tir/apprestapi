const express = require("express");
const bodyParser = require("body-parser");
const app = express();

// Parse Application json
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Calling Routes
var routes = require("./router");
routes(app);

app.listen(3001, () => {
  console.log(`Server started on port`);
});
