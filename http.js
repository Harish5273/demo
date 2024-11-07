const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.writeHead(200, { "content-type": "text/plain" });
    res.end("hello,world");

    return;
  } else if (req.url === "/about") {
    res.writeHead(200, { "content-type": "text/plain" });
    res.end("this is the about");

    return;
  } else {
    res.writeHead(404, { "content-type": "text/plain" });
    res.end("404 page not found");
  }
});
server.listen(4000, () => {
  console.log(" server running at http://localhost:4000/");
});

