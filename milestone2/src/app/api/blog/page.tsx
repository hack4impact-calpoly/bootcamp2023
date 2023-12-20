import React from "react";
import BlogPreview from "@/components/blogPreview";
import connectDB from "@/helpers/db";
import Blog from "../../../database/blogSchema";

export default async function BlogComponent() {
  let blogs = await getBlogs();
  return (
    <>
      <div className="blog-container"></div>
      {blogs &&
        blogs.map(
          (blog) => <BlogPreview key={blog.title} {...blog} /> // This is how we call the component
        )}
    </>
  );
}

async function getBlogs() {
  await connectDB(); // function from db.ts before

  try {
    // query for all blogs and sort by date
    const blogs = await Blog.find().sort({ date: -1 }).orFail();
    // send a response as the blogs as the message
    return blogs;
  } catch (err) {
    return null;
  }
}
