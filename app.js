/**
 * Module dependencies.
 */

var express = require('express'), 
	routes  = require('./routes'), 
	user 	= require('./routes/user'), 
	http	= require('http'), 
	path 	= require('path');

var app = express();

app.configure(function() {
	
	app.set('title', '式姬草子小幫手');
	
	app.set('port', process.env.PORT || 3000);
	app.set('views', __dirname + '/views');
	app.set('view engine', 'ejs');
	
	app.use(express.favicon());
	app.use(express.logger('dev'));
	app.use(express.bodyParser());
	app.use(express.methodOverride());
	app.use(app.router);
	app.use(express.static(path.join(__dirname, 'public')));

	// app.use('/', express.static(__dirname + '/html'));
    // app.use(express.static(__dirname + '/css'));
    // app.use(express.static(__dirname + '/js'));
    // app.use(express.static(__dirname + '/lib'));
    // app.use(express.static(__dirname + '/partial'));
});

app.configure('development', function() {
	app.use(express.errorHandler());
});

app.get('/', routes.index);
app.get('/users', user.list);

app.listen(app.get('port'), function() {
	console.log("Express server listening on port " + app.get('port'));
});
