const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

// Routes
const activityRoutes = require('./routes/activity');
const authRoutes = require('./routes/auth'); // NEW: import auth route

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/activity', activityRoutes); // for tracking data
app.use('/api/auth', authRoutes);         // for login/signup

// DB connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => app.listen(5000, () => console.log("✅ Server started on port 5000")))
  .catch(err => console.error("❌ DB connection failed:", err));

