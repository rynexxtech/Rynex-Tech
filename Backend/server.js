import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";


// Load env variables from .env file
dotenv.config();

// Connect Database
connectDB();

// Initialize Express app
const app = express();

// Middleware to parse JSON request bodies
app.use(express.json());

// Define a simple route to check if the server is running
app.get("/", (req, res) => {
    res.json({
        success: true,
        message: "🚀 Rynex Tech API is Running",
    });
});

// This route can be used to handle API requests 
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
});