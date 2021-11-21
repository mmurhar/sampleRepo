var http = require('http');
var fs = require('fs');


http.createServer(function (req, res) {

	res.writeHead(200, {'Content-type' : 'text/html'})
	fs.open('samplFile.txt', 'r', function (err, f) {

		if (err){

			return console.error(err)}
		else {
		console.log(f)
		console.log('File opened!')}

});
	res.end();
}).listen(8080);