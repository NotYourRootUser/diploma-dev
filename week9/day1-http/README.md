# HTTP and Backend Fundamentals Notes

## 1. HTTP
Hypertext Transfer Protocol.  
Rules that let computers communicate over the web.

Clients send requests.  
Servers send responses.

---

## 2. HTTP vs HTTPS
HTTP sends data in plain text.  
HTTPS uses TLS encryption so data cannot be intercepted or tampered with.

Ports:
- HTTP: 80
- HTTPS: 443

---

## 3. IP Addresses and DNS
An IP address is a numerical identifier for a device.

DNS maps human names to IP addresses.

Example:  
- google.com -> 142.250.74.206

DNS is the phone book of the internet.

---

## 4. Ports
Ports distinguish which service or application receives traffic on a machine.

Think of ports like doorways into a house.

Examples:
- Port 80: HTTP
- Port 443: HTTPS
- Port 3000 and 4000: common development ports

---

## 5. HTTP Requests
Requests include:
- Method (GET, POST, PUT, DELETE)
- URL (/home, /api/users)
- Headers (metadata like content type or authentication)
- Body (optional data sent to the server)

CRUD mapping:
- POST = Create
- GET = Read
- PUT = Update
- DELETE = Delete

---

## 6. HTTP Responses
Responses include:
- Status code (200 success, 404 not found, 500 server error)
- Status message (OK, Not Found)
- Headers (metadata like Content-Type)
- Body (data returned such as JSON or HTML)

---

## 7. Building a Node HTTP Server

Using the built in http module:

```js
import http from "http";

const server = http.createServer((request, response) => {
  console.log(request.url);
  response.writeHead(200, { "Content-Type": "text/plain" });
  response.end("Hello from a server");
});

server.listen(4000, () => {
  console.log("Listening on port 4000");
});
```

The server listens for requests on a port and sends responses using `write` and `end`.

---

## 8. Routing Logic
Endpoints are URL paths that trigger specific actions.

Example:

```js
if (request.url === "/api/greet") {
  response.write("Hello Rob");
}
```

The same endpoint can behave differently based on HTTP method:

- GET /users -> fetch users
- POST /users -> create user

---

## 9. Returning HTML
Use a Content-Type header and write HTML:

```js
response.writeHead(200, { "Content-Type": "text/html" });
response.end("<h1>Hello</h1>");
```

---

## 10. Returning JSON
Convert JavaScript objects to JSON with `JSON.stringify`:

```js
response.writeHead(200, { "Content-Type": "application/json" });
response.end(JSON.stringify(userList));
```

You can output JSON without setting headers, but correct APIs set Content-Type explicitly so systems know how to parse it.

---

## 11. Favicon Request
Browsers automatically request `/favicon.ico`.  
That is why it appeared in your logs.

---

## 12. Content-Type Clarity
Content-Type tells clients how to interpret data.

Without it, browsers may still display JSON but systems will treat it as plain text.

Correct content types matter when systems communicate.

---

## 13. Key Observation
Most beginners do not ask about header negotiation.

This question reflects backend thinking tendencies.

---

## 14. Middleware and Parsing
Frameworks like Express automate header setting, routing, JSON handling, and middleware logic.

Raw Node requires manual handling.

---

## 15. Summary Flow
1. Request arrives.
2. Server inspects URL and method.
3. Server writes appropriate response with status code, headers, and body.
4. Server ends response.
5. The client renders output based on headers and data format.

---
