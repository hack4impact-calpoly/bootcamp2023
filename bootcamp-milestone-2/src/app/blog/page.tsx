import React from "react";
import BlogPreview from "../components/blogPreview";
import blogSchema from "../database/blogSchema";
import connectDB from "../database/db";

export default async function Blogs() {
  const blogs = await getBlogs();
  if (blogs == null) {
    return (
      <div>
        <p>No blogs currently.</p>
      </div>
    );
  } else {
    return (
      <div>
        {blogs.map((blog) => (
          <BlogPreview {...blog} />
        ))}
      </div>
    );
  }
}

async function getBlogs() {
  await connectDB(); // function from db.ts before

  try {
    // query for all blogs and sort by date
    const blogs = await blogSchema.find().sort({ date: -1 }).orFail();
    // send a response as the blogs as the message
    return blogs;
  } catch (err) {
    return null;
  }
}
