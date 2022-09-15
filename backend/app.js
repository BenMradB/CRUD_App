require('dotenv').config();
const express = require('express');
const userRouter = require('./routes/userRoutes');

const app = express();

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// User Router
app.use('/api/v1/users', userRouter);

module.exports = app;