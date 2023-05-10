const express = require("express");
const App = express();

// App.get("/", function (req, res) {
//   res.send("hello world");
// });


//__dirname = givees path to given director/folder
App.get("/", (req, res) => res.sendFile(__dirname+ "/index.html"));

App.listen(3000, () =>
  console.log("The server has started ruining on port 3000")
);
