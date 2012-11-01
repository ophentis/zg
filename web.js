var express = require('express');

var app = express();

//setup configuration


app.configure('develop',function() {
    app.use(express.logger());
});

app.configure(function() {
    app.set('title', '式姬草子小幫手');

    app.use(express.static(__dirname + '/css'));
    app.use(express.static(__dirname + '/js'));
    app.use(express.static(__dirname + '/lib'));
    app.use(express.static(__dirname + '/partial'));
});

//setup pages
app.get('/', function(request, response) {
    response.send('Hello World!');
});

//init server and listen on port
var port = process.env.PORT || 5000;
app.listen(port, function() {
    console.log("Listening on " + port);
}); 