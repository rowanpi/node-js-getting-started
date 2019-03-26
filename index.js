var express = require("express");
var myParser = require("body-parser");
var app = express();

app.use(myParser.urlencoded({
  extended: true
}));
app.use(myParser.json());

app.use(myParser.urlencoded({extended : true}));
  app.post("/rpro", function(request, response) {
  console.log(request.body); //This prints the JSON document received (if it is a JSON document)
  response.sendStatus(200);
});

//Start the server and make it listen for connections on port 8080
 
app.listen(5000);