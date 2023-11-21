// Importing necessary components and types
import React from 'react';
import BlogComponent from './BlogComponent';
import { IBlog } from '@/database/blogSchema'; // Adjust the import path as necessary

// Defining the props type for BlogPreview
interface BlogPreviewProps {
  blogs: IBlog[];
}

// BlogPreview component
const BlogPreview: React.FC<BlogPreviewProps> = ({ blogs }) => {
  // If no blogs are found or the array is empty, display a message
  if (!blogs || blogs.length === 0) {
    return <div>No blogs found.</div>;
  }

  // Render the list of blogs
  return (
    <div className="blogs-section">
      {blogs.map(blog => (
        <BlogComponent key={blog._id} blog={blog} />
      ))}
    </div>
  );
};

export default BlogPreview;