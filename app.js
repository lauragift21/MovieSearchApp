var express = require("express");

var app = express()

var request = require("request");

// tells express that the default template engine is ejs
app.set("view engine", "ejs");

app.get('/', function(req, res){
    res.render("search");
});

app.get('/results', function(req, res){
    var query = req.query.search;
    var url = "http://omdbapi.com/?s&apikey=thewdb" +  query;
    request(url, function(error, response, body) {
        if(!error && response.statusCode == 200) {
            var data = JSON.parse(body)
            res.render("results", {data: data});
        }
    });
});


app.listen(3000, function () {
  console.log('Server started at port 3000')
});

