import React from "react";
import BlogPreview from "../components/blogPreview";
import "../globals.css";
import connectDB from "../../helpers/db";
import Blogs from "../../database/blogSchema";

async function getBlogs() {
  await connectDB();

  try {
    // const blogs = await Blogs.find().sort({ date: -1 }).orFail();
    const blogs = await Blogs.find().orFail();
    return blogs;
  } catch (err) {
    return null;
  }
}

export default async function Blog() {
  const blogs = await getBlogs();

  return (
    <main>
      <h2 className="page-title">Blogs</h2>
      <div>
        {blogs == null ? (
          <div>No blogs</div>
        ) : (
          <div>
            {blogs.map((blog) => (
              <BlogPreview key={blog._id} {...blog.toObject()} />
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
