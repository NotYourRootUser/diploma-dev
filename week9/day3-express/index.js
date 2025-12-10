import express from "express";
import dotenv from "dotenv";
import { customers } from "./customer.js";
dotenv.config();

const app = express();
const PORT = process.env.PORT || 8080;

// sample user list
const userList = [
  { name: "John", age: 27 },
  { name: "Mary", age: 22 },
  { name: "Ethan", age: 17 },
  { name: "Joe", age: 53 },
  { name: "Amelia", age: 87 },
  { name: "Adam", age: 34 },
];

// basic routes
app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/api/about", (req, res) => {
  res.send("My name is Justin");
});

app.get("/api/contact", (req, res) => {
  res.send("contact me at: justinu@missionreadyhq.com");
});

// query param example ?name=Mary
app.get("/api/profile", (req, res) => {
  const findUser = userList.find(
    (u) => u.name.toLowerCase() === req.query.name?.toLowerCase()
  );

  if (!findUser) {
    return res.status(404).json({ error: "User not found" });
  }

  res.json(findUser);
});

// dynamic route example /api/userList/Adam
app.get("/api/userList/:name", (req, res) => {
  const requestedName = req.params.name.toLowerCase();

  const user = userList.find(
    (u) => u.name.toLowerCase() === requestedName
  );

  if (!user) {
    return res.status(404).json({
      message: `User ${req.params.name} not found`,
    });
  }

  res.json(user);
});

// customer exercise /api/customer/1
app.get("/api/customer/:id", (req, res) => {
  const customerId = Number(req.params.id);

  const customer = customers.find((c) => c.id === customerId);

  if (!customer) {
    return res.status(404).json({ message: "Customer not found" });
  }

  res.json(customer);
});

// 404 fallback
app.use((req, res) => {
  res.status(404).send("This page does not exist");
});

// server start
app
  .listen(PORT, () => {
    console.log(`Listening at http://localhost:${PORT}`);
  })
  .on("error", (error) => {
    if (error.code === "EADDRINUSE") {
      console.log("Port is already in use");
    } else {
      console.log("Server error:", error);
    }
  });
