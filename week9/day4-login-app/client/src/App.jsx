import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [loginData, setLoginData] = useState(null);
  const [message, setMessage] = useState("Please log in");

  const handleSubmit = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    const formData = { email, password };

    setLoginData(formData);
  };

  useEffect(() => {
    if (!loginData) return; // stop first render

    fetch("http://localhost:4000/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(loginData),
    })
      .then((response) => {
        if (response.status === 200) {
          setMessage("Login Success!");
        } else if (response.status === 401) {
          setMessage("Invalid password!");
        } else if (response.status === 404) {
          setMessage("User not found.");
        } else {
          setMessage("Unexpected error.");
        }
      })
      .catch((error) => {
        console.log("Error: ", error);
        setMessage("Network error — server unreachable.");
      });
  }, [loginData]);

  return (
    <>
      <h3>Log in - Client-Side Rendered with React</h3>

      <form onSubmit={handleSubmit}>
        <label>Email</label>
        <br />
        <input type="email" name="email" />
        <br />

        <label>Password</label>
        <br />
        <input type="password" name="password" />
        <br />

        <input type="submit" />
      </form>

      <p>{message}</p>
    </>
  );
}

export default App;
