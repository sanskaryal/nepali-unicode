// server.js
const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 8082;

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

// Optional: add any additional API endpoints or middleware here
// app.get('/api/hello', (req, res) => res.send('Hello World'));

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
