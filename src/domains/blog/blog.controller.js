const blogService = require("./blog.service");

// Create a blog
async function createBlog(req, res) {
  try {
    const blog = await blogService.createBlog(req.body);
    res.status(201).json(blog);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

// Get all blogs
async function getBlogs(req, res) {
  try {
    const blogs = await blogService.getAllBlogs();
    res.json(blogs);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

// Get blog by ID
async function getBlogById(req, res) {
  try {
    const blog = await blogService.getBlogById(req.params.id);
    if (!blog) return res.status(404).json({ error: "Blog not found" });
    res.json(blog);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

// Update blog
async function updateBlog(req, res) {
  try {
    const blog = await blogService.updateBlog(req.params.id, req.body);
    if (!blog) return res.status(404).json({ error: "Blog not found" });
    res.json(blog);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

// Delete blog
async function deleteBlog(req, res) {
  try {
    const blog = await blogService.deleteBlog(req.params.id);
    if (!blog) return res.status(404).json({ error: "Blog not found" });
    res.json({ message: "Blog deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

module.exports = {
  createBlog,
  getBlogs,
  getBlogById,
  updateBlog,
  deleteBlog,
};
