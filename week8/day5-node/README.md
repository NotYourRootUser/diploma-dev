# Node.js API Flow Notes

## 1. What Happens When the Frontend Sends Data
A frontend app (React) sends data to a backend server (Node/Express) through an HTTP request.  
Example: creating a post, sending login details, submitting a form.

Steps:
1. Data is sent from the browser to a server endpoint.
2. The server receives the request and reads the data.
3. The server runs logic to process or validate the data.
4. The server saves the data somewhere, usually a database.
5. The server sends a response back to the frontend.

## 2. Backend Responsibilities
### Handling the Request
The server must:
- Accept the incoming request.
- Parse any data sent in the body.
- Run the correct route handler.

### Saving the Data
The backend will:
- Validate the data.
- Save it into a database.
- Return a confirmation or error.

## 3. Why Backend Exists
The backend is needed for:
- Storing information permanently.
- Keeping sensitive logic secure.
- Handling authentication.
- Responding to different clients consistently.

## 4. How React and Node Work Together
React:
- Handles UI.
- Sends fetch or axios calls.
- Displays results.

Node:
- Receives requests.
- Executes functions.
- Reads or writes to a database.
- Returns JSON responses.

## 5. Recap of the Lesson
- Modules help structure backend code.
- Node runs JavaScript on the server.
- The request to response cycle is the core of API development.
- Express will simplify routing and request handling.

