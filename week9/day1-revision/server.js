import http from "http";

const server = http.createServer((req, res) => {
  console.log("Created");
  console.log("URL:", req.url, "Method:", req.method);

const justin = {
  "name": "Justin",
  "role": "Cloud Security Architect in training"
};

  if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.write("We are officially doing revision now ;)");
    res.end();
  } else if (req.url === "/api/greet") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.write("Hello Rob, Welcome Back");
    res.end();
  } else if (req.url === "/about") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("<h1>This is HTML</h1>");
    res.end();
  } else if (req.url === "/api/user") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.write(JSON.stringify(justin));
    res.end();
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.write("Page not found");
    res.end();
  }
});
// set up port
const PORT = 4000;
server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
