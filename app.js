var express = require("express");

var app = express()

var request = require("request");
// tells express that there's apublic folder for all assets
app.use(express.static("public"));

// tells express that the default template enginge is ejs
app.set("view engine", "ejs");

app.get('/results', function(req, res){
    request("http://omdbapi.com/?s=games+of+thrones&apikey=thewdb", function(error, response, body) {
        if(!error && response.statusCode == 200) {
            var data = JSON.parse(body)
            res.render("results", {data: data});
        }
    });
});


app.listen(3000, function () {
  console.log('Server started at port 3000')
})

