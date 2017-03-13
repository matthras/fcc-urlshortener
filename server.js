var express = require('express')
var app = express();

// Storing data in MongoDB - have a collection of objects where each object is a URL/ID pair
// e.g. { 'url': 'http://www.google.com', 'id':2871 }

app.get('/new/:url', function(req,res) {
    var url = req.params.url;
    // Check URL - if URL is valid, then continue. Else return error.

    // Search url to see if it exists
    // If it exists, search database to see if link exists and return pair

    // Else generate shortened url and store pair in database
})

app.get('/:id', function(req, res) {
    var id = req.params.id;
    // Look up id in database
    // If it matches, direct user to website

    // If it doesn't match, return error.
})