// ESM import
import http from "http";

// sample data for JSON response
const userList = [
    { name: "John", age: 27 },
    { name: "Joe", age: 53 },
    { name: "Adam", age: 34 },
];

// create the server instance
const server = http.createServer((request, response) => {
    console.log("Server created!");
    console.log(request.url);

    // root endpoint
    if (request.url === "/") {
        response.writeHead(200, { "Content-Type": "text/plain" });
        response.write("We are officially writing servers now ;)");
        response.end();

    // greet endpoint
    } else if (request.url === "/api/greet") {
        response.writeHead(200, { "Content-Type": "text/plain" });
        response.write("Hello Rob, thanks for visiting this URL");
        response.end();

    // user list JSON endpoint
    } else if (request.url === "/api/userList") {
        response.writeHead(200, { "Content-Type": "application/json" });
        response.write(JSON.stringify(userList)); // array to JSON
        response.end();

    // fallback response
    } else {
        response.writeHead(404, { "Content-Type": "text/plain" });
        response.write("Page not found");
        response.end();
    }
});

// set up port
const PORT = 4000;
server.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
