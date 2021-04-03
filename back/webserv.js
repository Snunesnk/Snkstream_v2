// Modules
const { Console } = require('console');
var fs = require('fs');
var https = require('https');
var url = require('url');
const express = require('express')

// Useful paths
var front = "/home/snk/Snkstream_v2/front/";
var media = "/merge/media";

// APP
const app = express();
const port = 4242;

// Get ssl certificates
const options = {
	key: fs.readFileSync("/etc/letsencrypt/live/snkstream.com/privkey.pem"),
	cert: fs.readFileSync("/etc/letsencrypt/live/snkstream.com/cert.pem")
};

// ================================== //
// Init the server (Easy right ?)     //
// ================================== //
https.createServer(options, app).listen(port);

/* ==================================
			ROUTES
  ================================== */

// ================================== //
// Returns index.html                 //
// ================================== //
app.get("/", function (req, res) {
	var file = front + "Vues/index.html";

	// Read file, and return it
	fs.readFile(file, function (err, data) {
		// Prevent potential errors
		if (err) {
			console.log("Oops, an error occured: " + err);
			throw err;
		}

		// Respond with the file
		res.writeHead(200, { "Content-Type": "text/html" });
		res.write(data);

		return res.end();
	});
});

// ================================== //
// Returns stylesheets                //
// ================================== //
app.get("/*.css", function (req, res) {
	var path = url.parse(req.url, true).pathname;

	var file = front + "Stylesheets" + path;

	// Read file, and return it
	fs.readFile(file, function (err, data) {
		// Prevent potential errors
		if (err) {
			console.log("Oops, an error occured: " + err);
			throw err;
		}

		// Respond with the file
		res.writeHead(200, { "Content-Type": "text/css" });
		res.write(data);

		return res.end();
	});
});

// ================================== //
// Returns scripts                    //
// ================================== //
app.get("/*.js", function (req, res) {
	var path = url.parse(req.url, true).pathname;

	var file = front + "Scripts" + path;

	// Read file, and return it
	fs.readFile(file, function (err, data) {
		// Prevent potential errors
		if (err) {
			console.log("Oops, an error occured: " + err);
			throw err;
		}

		// Respond with the file
		res.writeHead(200, { "Content-Type": "text/javascript" });
		res.write(data);

		return res.end();
	});
});

// ================================== //
// Returns imgs                       //
// ================================== //
app.get("/*.png", function (req, res) {
	var path = url.parse(req.url, true).pathname;

	var file = front + "favicons" + path;

	// Read file, and return it
	fs.readFile(file, function (err, data) {
		// Prevent potential errors
		if (err) {
			console.log("Oops, an error occured: " + err);
			throw err;
		}

		// Respond with the file
		res.writeHead(200, { "Content-Type": "text/png" });
		res.write(data);

		return res.end();
	});
});

// ================================== //
// Returns videos                     //
// ================================== //
app.get("/*.mp4", function (req, res) {
	// Get file
	var path = url.parse(req.url, true).pathname;
	var videoPath = media + path;

	console.log("file " + videoPath + " is asked.");

	 // Ensure there is a range given for the video
	 const range = req.headers.range;
	 if (!range) {
	   res.status(400).send("Requires Range header");
	 }
   
	 // get video stats (about 61MB)
	 const videoSize = fs.statSync(videoPath).size;
   
	 // Parse Range
	 // Example: "bytes=32324-"
	 const CHUNK_SIZE = 10 ** 6; // 1MB
	 const start = Number(range.replace(/\D/g, ""));
	 const end = Math.min(start + CHUNK_SIZE, videoSize - 1);
   
	 // Create headers
	 const contentLength = end - start + 1;
	 const headers = {
	   "Content-Range": `bytes ${start}-${end}/${videoSize}`,
	   "Accept-Ranges": "bytes",
	   "Content-Length": contentLength,
	   "Content-Type": "video/mp4",
	 };
   
	 // HTTP Status 206 for Partial Content
	 res.writeHead(206, headers);
   
	 // create video read stream for this particular chunk
	 const videoStream = fs.createReadStream(videoPath, { start, end });
   
	 // Stream the video chunk to the client
	 videoStream.pipe(res);
});