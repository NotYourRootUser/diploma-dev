# Login App Notes

## Frontend Flow
- User fills email and password in a React form.
- `handleSubmit()` prevents default form behavior and extracts values.
- Login details stored in state via `setLoginData()`, triggering re-render.
- `useEffect()` watches `loginData` and sends POST request to backend using `fetch()`.
- Response status checked and UI feedback message updated.

## React State Usage
- `loginData` holds submitted form details.
- `message` holds login result text shown to user.
- State re-renders UI automatically when updated.

## Backend Setup
- Express server created using `express()`.
- CORS enabled so frontend (5173) can talk to backend (4000).
- `express.json()` middleware added to parse JSON request bodies.

## Login Endpoint Logic
- POST `/login` receives data from frontend.
- Reads `req.body.email` and `req.body.password`.
- Mock database array checks for matching email via `.find()`.
- If user exists, compare password.
- If password matches → return 200.
- If email exists but password wrong → return 401.
- If user does not exist → return 404.

## HTTP Status Codes Used
- `200` success/authenticated.
- `401` unauthorized (wrong password).
- `404` not found (email unknown).

## Client Feedback
- Frontend reads response status to decide message shown.
- Examples:
  - `Login Success!`
  - `Invalid password`
  - `User not found`

## Middleware Recap
- Functions that run between request and response.
- Example: timestamp middleware logging `Request received at <time>`.

## Key Concepts
- Frontend must send JSON (`Content-Type: application/json`).
- Backend must parse JSON (`express.json()`).
- CORS must be enabled for cross-port communication.
- State in React controls dynamic UI messages on login result.
