import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();

// Allow frontend origin
app.use(cors({
  origin: "http://localhost:5173"
}));
app.use(reqRealTime)

function reqRealTime(res, req, next) {
  console.log(`request recieved at ${new Date}`)
  next()// pass control to the next middle or route handler 
}

// mock db of users
const users = [
  { email: "rob@dvds.com", password: "rob123" },
  { email: "john@dvds.com", password: "john123" },
];
 

// Parse JSON request bodies
app.use(express.json());

app.post("/login", (req, res) => {
  console.log("/login endpoint hit!", req.body);

  const { email, password } = req.body;

  // Find user by email
  const user = users.find((element) => element.email === email);

  if (!user) {
    return res.status(404).json({ success: false, message: "User not found" });
  }

  // Compare passwords
  if (user.password !== password) {
    return res.status(401).json({ success: false, message: "Invalid password" });
  }

  // Successful login
  return res.status(200).json({ success: true, message: "Login successful!" });
});


const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Listening at http://localhost:${PORT}`);
});
