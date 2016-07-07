var express = require('express');
var request = require('request');

var app = express();

var PORT = process.env.PORT || 8080;
app.get('/', function(req, res) {
  res.send('Welcome to Recipe Bot!');
});


app.get('/searchrecipe/:q', function (req, res){
    var url = "https://api.projectoxford.ai/luis/v1/application?id=edab7fb9-9fb0-4940-8a2b-80e60a2b3abd&subscription-key=c4ac7ed5ec024d6584cdb0f4e4a97c56&q=";
    var search = req.params.q;
    var intent = search.intents.filter((x) => { return x.score >= .60 });
    if (intent == "searchRecipe") {
        var ingredientList = search.entities.map((x) => { return x.entity });
    }

    url = url + search;
    request(url, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            res.json({body: body, ingredients: ingredientList}) // Show the HTML for the Google homepage.
        }
    })


});



app.listen(PORT, function() {
  console.log('up and running');
});
