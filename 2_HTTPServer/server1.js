const http = require("http");

const server = http.createServer((req, res) => {
  console.log(req.url);
  const path = req.url;
  if (path == "/") res.end("<h1>This is Server</h1>");
  else if (path == "/api") res.end("<h1>This is API Page</h1>");
  else if (path == "/overview") res.end("<h1>This is Overview Page</h1>");
  else {
    res.writeHead(404, {
      "Content-type": "text/html",
      "my-own-header": "qaidjohar",
    });
    res.end("<h1>Page Not Found</h1>");
  }
});
// http://127.0.0.1:8000
server.listen(8000, "127.0.0.1", () => {
  console.log("Listening to requests on port 8000");
});
