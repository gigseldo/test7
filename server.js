const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();
const port = process.env.PORT || 3000;

const corsOptions = {
  origin: 'https://your-frontend-domain.com', // Use true or '*' to allow all origins (cannot combine '*' with credentials: true)
  methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With', 'Accept'],
  exposedHeaders: ['Content-Range', 'X-Content-Range'],
  credentials: true, // Allow cookies and auth headers
  maxAge: 86400, // Cache preflight response for 24 hours (in seconds)
  preflightContinue: false, // Pass the CORS preflight response to the next handler if true
  optionsSuccessStatus: 204 // Status code sent for successful OPTIONS requests
};

// Enable CORS
app.use(cors(corsOptions));

// Allow Express to read JSON data
app.use(express.json());

// Serve the website from the "public" folder
//app.use(express.static(path.join(__dirname, "public")));
app.use(express.static(__dirname));

// Simple API endpoint
app.get("/api/message", (req, res) => {
    res.json({
        message: "Hello from the Node.js server!"
    });
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at ${port}`);
});
