import React from "react";
import BlogPreview from "../components/blogPreview";
import blogSchema from "../database/blogSchema";
import connectDB from "../database/db";

async function getBlog() {
  const res = await fetch("localhost:3000/api/blog/" + slug);
  if (res.ok) {
    return await res.json();
  } else {
    return null;
  }
}

export default async function Blogs() {
  const blogs = await Blog();
  if (blogs == null) {
    return (
      <main>
        <h1>Blog</h1>
        <p>No blogs currently.</p>
      </main>
    );
  } else {
    return (
      <main>
        <div>
          {blogs.map((blog) => (
            <BlogPreview
              title={blog.title}
              description={blog.description}
              date={blog.date}
              slug={blog.slug}
              image={""}
              content={""}
            />
          ))}
        </div>
      </main>
    );
  }
}

async function Blog() {
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
