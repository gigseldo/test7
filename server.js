const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();
const PORT = 3000;

// Enable CORS
app.use(cors());

// Allow Express to read JSON data
app.use(express.json());

// Serve the website from the "public" folder
app.use(express.static(path.join(__dirname, "public")));

// Simple API endpoint
app.get("/api/message", (req, res) => {
    res.json({
        message: "Hello from the Node.js server!"
    });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});