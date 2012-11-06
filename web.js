var express = require('express');

var app = express();

//setup configuration
app.set('view engine', 'ejs');


app.configure('develop',function() {
    app.use(express.logger());
});

app.configure(function() {
    app.set('title', '式姬草子小幫手');

	// app.use('/', express.static(__dirname + '/html'));
    app.use('/css', express.static(__dirname + '/css'));
    app.use('/js', express.static(__dirname + '/js'));
    app.use('/lib', express.static(__dirname + '/lib'));
    app.use('/partial', express.static(__dirname + '/partial'));
});

//setup pages
app.get('/', function(request, response) {
    response.render('./view/index.ejs');
});

//init server and listen on port
var port = process.env.PORT || 5000;
app.listen(port, function() {
    console.log("Listening on " + port);
}); 