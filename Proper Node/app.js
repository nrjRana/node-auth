require('dotenv').config();
const express = require('express');
const { expressjwt: jwt } = require('express-jwt'); // Updated import
const jwksRsa = require('jwks-rsa');
const apiRouter = require('./src/routes/api');

const app = express();
const port = process.env.PORT || 3000;

// JWT Authentication Middleware
const jwtAuth = jwt({
  secret: jwksRsa.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: process.env.JWKS_URI,
  }),
  audience: process.env.AUDIENCE,
  issuer: process.env.ISSUER,
  algorithms: ["RS256"],
});

// Middleware
app.use(express.json());

// Apply authentication middleware to /api routes
app.use('/api', jwtAuth, apiRouter);

app.get('/', (req, res) => {
  res.send('Welcome to the Node.js API!');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
