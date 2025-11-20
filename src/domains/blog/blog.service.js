const Blog = require("./blog.model");

async function createBlog(data) {
  const blog = new Blog(data);
  return await blog.save();
}

async function getAllBlogs() {
  return await Blog.find().populate("writer", "name email"); // populate writer details
}

async function getBlogById(id) {
  return await Blog.findById(id).populate("writer", "name email");
}

async function updateBlog(id, data) {
  return await Blog.findByIdAndUpdate(id, data, { new: true });
}

async function deleteBlog(id) {
  return await Blog.findByIdAndDelete(id);
}

module.exports = {
  createBlog,
  getAllBlogs,
  getBlogById,
  updateBlog,
  deleteBlog,
};
