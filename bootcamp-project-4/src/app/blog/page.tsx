//import { blogs } from "./blogData";
import BlogPreview from "../components/blogPreview";
import React from "react";
import Blog from "../database/blogSchema";
import Link from "next/link";

import connectDB from "../helpers/db";

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
export default async function Blogs() {
  const blogs = await getBlogs();
  if (blogs == null) {
    return (
      <main>
        <h1>Blog</h1>
        <p>No Blogs Found</p>
      </main>
    );
  } else {
    return (
      <div>
        {blogs.map((blog) => (
          <BlogPreview
            title={blog.title}
            date={blog.date}
            description={blog.description}
            image={blog.image}
            slug={blog.slug}
            content={""}
            comments={[]}
          />
        ))}
      </div>
    );
  }
}
