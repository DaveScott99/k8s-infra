var express = require("express");
var app = express();

app.get("/", function (req, res) {
  res.send("Olá, " + req.hostname);
});

app.listen(3000, function (error) {
  if (!error) {
    console.log(
      "Server is Successfully Running, and App is listening on port " + 3000
    );
  } else {
    console.log("Error occurred, server can't start", error);
  }
});
