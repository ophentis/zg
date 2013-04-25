var express = require('express');

var app = express();

var Api = require('./api.js');

//setup configuration
app.set('view engine', 'ejs');


app.configure('develop',function() {
    app.use(express.logger());
});

app.configure(function() {
    app.set('title', '式姬草子小幫手');

	// app.use('/', express.static(__dirname + '/html'));
    // app.use('/css', express.static(__dirname + '/css'));
    // app.use('/js', express.static(__dirname + '/js'));
    // app.use('/lib', express.static(__dirname + '/lib'));
    // app.use('/partial', express.static(__dirname + '/partial'));
});



//******************* hack day *******************

var api = new Api();

var mainPath = 'http://www.ipeen.com.tw/search/xinbei/000/1-0-0-0/';

var data = { p: 1 }

var totalPages = 976;

var errorMessage = '';

var timeout = 5;

function crawl() {
	console.log(data.p);
	api.getHtml(mainPath, data, function(html) {
		// response.write(html);
		// response.end();
		// console.log(html);

		// var matches = html.match(/<article class="serItem".*>(.*)<\/article>/g);
		// console.log(matches);

		var html64 = new Buffer(html).toString('base64');
		console.log(html64);

		var postData = {
			url: mainPath + '?p='+data.p,
			html: html64
		}

		api.postHtml('http://dev.fingerfever.com:90/test/test/html',postData, function(response) {
			console.log(response);
		});

		data.p++;
		setTimeout(crawl, timeout * 1000);
	}, function(e) {
		errorMessage = e;
	});

}

crawl();



//******************* hack day *******************

//setup pages
app.get('/', function(request, response) {

	response.write('<h1>page:'+data.p+'</h1>');
	if(errorMessage) {
		response.write('<h1>error message:'+errorMessage+'</h1>');
	}
	response.end();

});

//init server and listen on port
var port = process.env.PORT || 5000;
app.listen(port, function() {
    console.log("Listening on " + port);
}); 



// var api = new Api();

// var postData = {
// 	url: '123',
// 	html: '123'
// }

// api.postHtml('http://dev.fingerfever.com:90/test/test/html',postData, function(response) {
// 	console.log(response);
// });


// target http:///search/xinbei/000/1-0-0-0/

// var opt = {
// 	host: 'www.ipeen.com.tw',
// 	path: '/'
// };

// var api = new Api();

// api.getHtml(opt, function(html) {
// 	console.log(html);


// });



/***/
/*
var html = document;
var places = $('article.serItem:not(.vipShow)',html).map(function() {

   var place = {
      id: $('.serShop .name a',this).text().replace('/shop/'),
      phone: 'http://www.ipeen.com.tw'+$('.serData .basic img[alt="電話號碼"]',this).attr('src'),
      category: $('.serData .detail .cate',this).text().trim(),
      price: $('.serData .detail .costEmpty',this).text().trim(),
      rank: $('.serData .detail .score img',this).attr('alt').replace('綜合評價：','')
   }

   return place;
});
*/