# Query vs Route Parameters — Summary Notes

## Query Parameters (`req.query`)
- Optional values added to a URL after `?`
- Used for filtering, searching, sorting, or passing multiple options
- The route still works even if they are missing  
- Example:  
  `/api/profile?name=Mary&age=22`
- Access in Express using:
  ```js
  req.query.name
  ```

## Route Parameters (`req.params`)
- Required parts of the URL path  
- Used to uniquely identify a resource such as a user or product  
- The route becomes invalid if missing  
- Example:  
  `/api/customer/3`
- Access in Express using:
  ```js
  req.params.id
  ```

## Comparison Table
| Feature        | Query Parameters | Route Parameters |
|----------------|------------------|------------------|
| Location       | After `?`        | In URL path      |
| Required       | No               | Yes              |
| Purpose        | Filters/options  | Identify specific resource |
| Express access | `req.query`      | `req.params`     |

## Usage Examples
### Query example
```js
app.get("/api/profile", (req, res) => {
  const name = req.query.name;
});
```

### Route parameter example
```js
app.get("/api/customer/:id", (req, res) => {
  const id = req.params.id;
});
```

## Memory Model
- Query parameters → “extra filters”
- Route parameters → “give me this exact item”

## Interview Line
Query parameters refine a result, while route parameters identify the exact resource being fetched.

