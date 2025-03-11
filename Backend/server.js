const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const path = require('path');
const PORT = 3000;

// Middleware to parse JSON
app.use(bodyParser.json());

// Serve static files from the "Frontend" folder
app.use(express.static(path.join(__dirname, '..', 'Frontend')));

// Handle the root route
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'Frontend', 'index.html'));
  });

// Mock user data (replace with a database in a real app)
const users = [
  { username: 'user1', password: 'password1' },
  { username: 'user2', password: 'password2' },
];

// Login endpoint
app.post('/login', (req, res) => {
  const { username, password } = req.body;

  const user = users.find(
    (u) => u.username === username && u.password === password
  );

  if (user) {
    res.json({ success: true });
  } else {
    res.json({ success: false });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});