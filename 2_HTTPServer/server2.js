const http = require("http");
const fs = require("fs");
const url = require("url");

const apiData = fs.readFileSync("./apiData.json", "utf-8");
const apiObj = JSON.parse(apiData);
const htmlData = fs.readFileSync("./file.html", "utf-8");
console.log("File Read Successfully");

function handleAPI(query) {
  // if no query arguments, return entire json data
  if (Object.keys(query).length == 0) return apiData;
  //if id in query arguments, return specific id object
  if (Object.keys(query).includes("id")) {
    const responseData = apiObj.find((el) => el.id == query.id);
    return JSON.stringify(responseData, null, 2);
  }
  return "Invalid Input";
}

const server = http.createServer((req, res) => {
  const { query, pathname } = url.parse(req.url, true);
  // console.log(req.url);
  // console.log({ query, pathname });
  // const path = req.url;
  if (pathname == "/") res.end("<h1>This is Server</h1>");
  else if (pathname == "/api") {
    res.writeHead(200, {
      "Content-type": "application/json",
      "my-own-header": "hello-world",
    });
    res.end(handleAPI(query));
  }
  // else if (pathname == "/api") res.end(apiData);
  else if (pathname == "/api2") res.end(JSON.stringify(query));
  else if (pathname == "/html") res.end(htmlData);
  else if (pathname == "/overview") res.end("<h1>This is Overview Page</h1>");
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
