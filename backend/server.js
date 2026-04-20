const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");

dotenv.config();
connectDB();

const app = express();

/* ✅ JSON middleware FIRST */
app.use(express.json());

/* ✅ CORS FIX (ONLY YOUR VERCEL FRONTEND) */
app.use(
  cors({
    origin: "https://password-reset-app-virid.vercel.app",
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

/* ✅ Handle preflight requests */
app.options("*", cors());

/* Routes */
const authRoutes = require("./routes/authRoutes");
app.use("/api/users", authRoutes);

/* Test route */
app.get("/", (req, res) => {
  res.send("API Running...");
});

/* PORT */
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});