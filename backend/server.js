const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");

dotenv.config();
connectDB();

const app = express();

app.use(express.json());

/* CORS */
app.use(
  cors({
    origin: "https://password-reset-app-virid.vercel.app",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

/* Routes */
const authRoutes = require("./routes/authRoutes");
app.use("/api/users", authRoutes);

/* Health check */
app.get("/", (req, res) => {
  res.send("API Running...");
});

/* PORT */
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});