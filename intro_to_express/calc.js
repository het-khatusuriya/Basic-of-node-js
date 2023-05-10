const express = require("express");
const App = express();
const bodyparser = require("body-parser");

App.use(bodyparser.urlencoded({ extended: true }));

// App.get("/", function (req, res) {
//   res.send("hello world");
// });

//__dirname = givees path to given director/folder
App.get("/", (req, res) => res.sendFile(__dirname + "/calaculator.html"));

App.post("/", (req, res) => {
  var n1 = Number(req.body.n1);
  var n2 = Number(req.body.n2);
  var result = n1 + n2;
  res.send("the answer is " + result);
});

App.listen(7000, () =>
  console.log("The server has started ruining on port 3000")
);
