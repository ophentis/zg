/*
 * GET home page.
 */

var Api = require('./api.js');

var data = {
	p: 1
}

var api = new Api();

var mainPath = 'http://www.ipeen.com.tw/search/xinbei/000/1-0-0-0/';

api.getHtml(mainPath, data, function(html) {
	// response.write(html);
	// response.end();
	// console.log(html);

	// var matches = html.match(/<article class="serItem".*>(.*)<\/article>/g);
	// console.log(matches);

	var postData = {
		url: mainPath + '?p='+data.p,
		html: new Buffer(html).toString('base64')
	}

	api.postHtml('http://dev.fingerfever.com:90/test/test/html',postData, function(response) {
		console.log(response);
	});
});


});

exports.index = function(req, res){
  // res.render('index', { title: 'Express' });



};