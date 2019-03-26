var express = require("express");
var myParser = require("body-parser");
var FormData = require('form-data');
var app = express();
const axios = require('axios');

app.use(myParser.urlencoded({
  extended: true
}));
app.use(myParser.json());

app.use(myParser.urlencoded({extended : true}));
app.post("/rpro", function(request, response) {
  console.log(request.body); //This prints the JSON document received (if it is a JSON document)
  postRecievedResponse(request);
  response.sendStatus(200);
});

app.post("/test", function(request, response) {
console.log(request.body); //This prints the JSON document received (if it is a JSON document)
response.sendStatus(200);
});

function postRecievedResponse(request) {

  let data = new FormData();
  data.append('from',request.body.to);
  data.append('text',request.body.text);
  data.append('date',new Date().toISOString());
  axios.post('https://app.rapidpro.io/c/ex/8c9b878c-d395-4685-88ac-501532ed877d/receive', data)
  //axios.post('http://localhost:5000/test', data)
  .then((res) => {
    console.log(`statusCode: ${res.statusCode}`)
    console.log(res)
  })
  .catch((error) => {
    console.log("error sending recieved post")
    console.error(error)
  })
}
//Start the server and make it listen for connections on port 8080
 
app.listen(process.env.PORT || 5000)

