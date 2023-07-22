// Create web server that can accept any request to the path /comments/new and return a form for submitting comments. This form should have method set to POST and an action set to /comments.

// When submitted, the page should return a 303 response. The response should redirect to /thank-you.html.

// Hints

// You can use the fs module to read HTML files.

// You can send simply HTTP headers using the writeHead method. Remember to include the Content-Type: text/html header to identify the response body as HTML.

// Don't forget to call the end method or use the end option of the write method to finish the response.

// The object returned by the url.parse function will have a query property that holds an object with the form data.

// If you're having issues, try testing the form submission with curl. Run your program and submit a form like this:

// curl -d "name=Foo&message=Hello" http://localhost:8000/comments

const http = require('http');
const fs = require('fs');
const url = require('url');

const server = http.createServer(function (req, res) {
  const urlObject = url.parse(req.url, true);
  const pathname = urlObject.pathname;
  const query = urlObject.query;
  const method = req.method;

  if (pathname === '/comments/new' && method === 'GET') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    fs.readFile('./public/new.html', 'utf8', function (err, data) {
      res.end(data);
    });
  } else if (pathname === '/comments' && method === 'POST') {
    res.writeHead(303, { Location: '/thank-you.html' });
    res.end();
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not found');
  }
});

server.listen(8000);