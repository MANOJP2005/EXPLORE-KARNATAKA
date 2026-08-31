/**
 * Explore Karnataka - Backend Server
 * Node.js + Express + MongoDB (Mongoose)
 *
 * Run:  node server.js
 * URL:  http://localhost:5000
 */

require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const path = require('path');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// ---------- Middleware ----------
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// ---------- MongoDB Connection ----------
mongoose
  .connect(process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/explore_karnataka', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('✅ MongoDB connected'))
  .catch((err) => console.error('❌ MongoDB connection error:', err));

// ---------- User Schema ----------
const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, unique: true, lowercase: true, trim: true },
    password: { type: String, required: true },
    role: { type: String, enum: ['user', 'admin'], default: 'user' },
    savedDestinations: [{
      id: String,
      name: String,
      image: String,
      savedAt: { type: Date, default: Date.now }
    }],
  },
  { timestamps: true }
);

const User = mongoose.model('User', userSchema);

// ---------- Helper: Issue JWT ----------
const issueToken = (user) =>
  jwt.sign(
    { id: user._id, email: user.email, role: user.role },
    process.env.JWT_SECRET || 'supersecret_dev_key',
    { expiresIn: '1d' }
  );

// ---------- Helper: Auth Middleware ----------
const authMiddleware = (req, res, next) => {
  const header = req.headers.authorization;
  if (!header || !header.startsWith('Bearer ')) {
    return res.status(401).json({ message: 'Unauthorized: token missing' });
  }
  try {
    const token = header.split(' ')[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET || 'supersecret_dev_key');
    req.user = decoded;
    next();
  } catch (err) {
    return res.status(401).json({ message: 'Invalid or expired token' });
  }
};

// ---------- Helper: Admin Only ----------
const adminOnly = (req, res, next) => {
  if (req.user?.role !== 'admin') {
    return res.status(403).json({ message: 'Forbidden: admin access required' });
  }
  next();
};

// ===================================================
// ROUTES
// ===================================================

/**
 * POST /api/register
 * Body: { name, email, password }
 */
app.post('/api/register', async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({ message: 'All fields are required' });
    }
    if (password.length < 6) {
      return res.status(400).json({ message: 'Password must be at least 6 characters' });
    }

    const existing = await User.findOne({ email: email.toLowerCase() });
    if (existing) {
      return res.status(409).json({ message: 'Email already registered' });
    }

    const hashed = await bcrypt.hash(password, 10);
    const role = email.toLowerCase() === (process.env.ADMIN_EMAIL || '').toLowerCase() ? 'admin' : 'user';

    const user = await User.create({ name, email: email.toLowerCase(), password: hashed, role });

    return res.status(201).json({
      message: 'Registration successful',
      user: { id: user._id, name: user.name, email: user.email, role: user.role },
    });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: 'Server error' });
  }
});

/**
 * POST /api/login
 * Body: { email, password }
 */
app.post('/api/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ message: 'Email and password are required' });
    }

    const user = await User.findOne({ email: email.toLowerCase() });
    if (!user) return res.status(401).json({ message: 'Invalid credentials' });

    const valid = await bcrypt.compare(password, user.password);
    if (!valid) return res.status(401).json({ message: 'Invalid credentials' });

    // Re-evaluate admin role (in case ADMIN_EMAIL changed)
    const expectedRole =
      user.email === (process.env.ADMIN_EMAIL || '').toLowerCase() ? 'admin' : 'user';
    if (user.role !== expectedRole) {
      user.role = expectedRole;
      await user.save();
    }

    const token = issueToken(user);
    return res.json({
      message: 'Login successful',
      token,
      user: { id: user._id, name: user.name, email: user.email, role: user.role },
    });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: 'Server error' });
  }
});

/**
 * GET /api/admin
 * Protected admin-only route
 */
app.get('/api/admin', authMiddleware, adminOnly, (req, res) => {
  res.json({ message: `Welcome Admin ${req.user.email}`, user: req.user });
});

/**
 * POST /api/destinations/save
 * Save a destination to user's space
 */
app.post('/api/destinations/save', authMiddleware, async (req, res) => {
  try {
    const { id, name, image } = req.body;
    if (!id || !name) return res.status(400).json({ message: 'Destination id and name required' });
    
    const user = await User.findById(req.user.id);
    if (!user) return res.status(404).json({ message: 'User not found' });
    
    // Check if already saved
    const exists = user.savedDestinations.find(d => d.id === id);
    if (exists) return res.json({ message: 'Already saved', saved: user.savedDestinations });
    
    user.savedDestinations.push({ id, name, image, savedAt: new Date() });
    await user.save();
    
    res.json({ message: 'Destination saved!', saved: user.savedDestinations });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});

/**
 * GET /api/destinations/saved
 * Get user's saved destinations
 */
app.get('/api/destinations/saved', authMiddleware, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select('savedDestinations');
    res.json({ saved: user?.savedDestinations || [] });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});

/**
 * DELETE /api/destinations/save/:id
 * Remove saved destination
 */
app.delete('/api/destinations/save/:id', authMiddleware, async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    user.savedDestinations = user.savedDestinations.filter(d => d.id !== req.params.id);
    await user.save();
    res.json({ message: 'Removed', saved: user.savedDestinations });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});

// ---------- Fallback to index.html ----------
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// ---------- Start Server ----------
app.listen(PORT, () => {
  console.log(`🚀 Explore Karnataka running at http://localhost:${PORT}`);
});
