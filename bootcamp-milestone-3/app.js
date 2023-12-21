const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 3000;

// Middleware to parse JSON in requests
app.use(express.json());

// MongoDB Atlas connection string (replace with your own)
const mongoUri = 'YOUR_MONGODB_ATLAS_CONNECTION_STRING';

// Connect to MongoDB Atlas
mongoose.connect(mongoUri, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;

// Check MongoDB connection status
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB Atlas');
});

// Define a simple Blog schema
const blogSchema = new mongoose.Schema({
  title: String,
});

// Create a Mongoose model based on the schema
const Blog = mongoose.model('Blog', blogSchema);

// GET endpoint to retrieve all blogs
app.get('/api/blogs', async (req, res) => {
  try {
    const blogs = await Blog.find();
    res.json(blogs);
  } catch (error) {
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

// GET endpoint to retrieve a single blog by ID
app.get('/api/blogs/:id', async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    if (!blog) return res.status(404).json({ message: 'Blog not found' });
    res.json(blog);
  } catch (error) {
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

// POST endpoint to add a new blog
app.post('/api/blogs', async (req, res) => {
  try {
    const newBlog = await Blog.create({ title: req.body.title });
    res.status(201).json(newBlog);
  } catch (error) {
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

// Listen on the specified port
app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});
