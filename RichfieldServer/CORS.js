const express = require('express');
const cors = require('cors');

const app = express();

// ... other Express app configurations

// Enable CORS with specific origins (replace with your client-side app's domain)
app.use(cors({
  origin: 'http://localhost:3000', // Replace with your client app's URL
  credentials: true, // Allow cookies for authenticated requests (if applicable)
}));

// ... GraphQL endpoint and other routes
