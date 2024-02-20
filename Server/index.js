// server.js

const express = require('express');
const bodyParser = require('body-parser');
// const session = require('express-session'); // If using session-based authentication
// const bcrypt = require('bcrypt'); // For password hashing
const app = express();

// Middleware
app.use(bodyParser.json());
// app.use(session({
//   secret: 'secret-key', // Replace with your secret key
//   resave: false,
//   saveUninitialized: true
// }));

// Mock user database (replace with your actual database)
const users = [
  { id: 1, email: 'example@example.com', passwordHash: '$2b$10$T6uA4qLfvvsNpNXoD1d8wO3l1.wTxHv2tF8qR3EN7eeRjFpIhfhgS' } // Hash of 'password'
];

// Login route
app.post('/login', (req, res) => {
  const { email, password } = req.body;

  // Find user by email
  const user = users.find(user => user.email === email);

  if (!user) {
    return res.status(400).json({ message: 'User not found' });
  }

  // Check password
  bcrypt.compare(password, user.passwordHash, (err, result) => {
    if (err) {
      return res.status(500).json({ message: 'Internal server error' });
    }
    if (!result) {
      return res.status(401).json({ message: 'Invalid password' });
    }

    // If using session-based authentication
    req.session.userId = user.id;

    // If using JWT
    // const token = generateToken(user.id);
    // return res.json({ token });

    // Return user data or any other relevant information
    return res.json({ message: 'Login successful', user: { id: user.id, email: user.email } });
  });
});

// Example route requiring authentication
app.get('/profile', (req, res) => {
  // If using session-based authentication
  if (!req.session.userId) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  // If using JWT, verify and decode token

  // Get user data from database based on user ID
  const user = users.find(user => user.id === req.session.userId);
  if (!user) {
    return res.status(404).json({ message: 'User not found' });
  }

  // Return user profile
  return res.json({ user });
});

// Start the server
const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
