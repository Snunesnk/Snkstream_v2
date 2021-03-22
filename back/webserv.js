var fs = require('fs');
var http = require('http');
var url = require('url');


http.createServer(function (req, res) {
	// Get pathname
	var path = url.parse(req.url, true).pathname;
	
	if (path == '/')
		path = "/index.html";

	var ext = path.split('.')[1];

	// Get correct files following extention
	var file;
	var mime;
	if (ext == "js") {
		file = "../front/Scripts" + path;
		mime = "text/javascript";
	}
	else if (ext == "css") {
		file = "../front/Stylesheets" + path;
		mime = "text/css";
	}
	else if (ext == "png") {
		file = "../front/favicons" + path;
		mime = "image/png";
	}
	else if (ext == "html") {
		file = "../front/Vues" + path;
		mime = "text/html";
	}

	console.log("file: " + file + ", ext: " + ext + ", path: " + path);
	// Read file, and return it
	fs.readFile(file, function(err, data) {
		// Prevent potential errors
		if (err) throw err;

		// Respond with the file
		res.writeHead(200, {"Content-Type": mime});
		res.write(data);
		return res.end();
	})
}).listen(8080);
