const express = require("express");
const App = express();

// App.get("/", function (req, res) {
//   res.send("hello world");
// });

App.get("/", (req, res) => res.send("hello world"));

App.listen(3000, () =>
  console.log("The server has started ruining on port 3000")
);
