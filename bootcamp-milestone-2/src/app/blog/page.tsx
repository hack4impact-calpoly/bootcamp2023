"use client";
import BlogPreview from "../components/blogPreview";
import Blog from "@/database/blogSchema";
import "../globals.css";
import connectDB from "../../helpers/db";
import React, { useState } from "react";

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

export default async function BlogPage() {
  const blogData = await getBlogs();
  return (
    <div>
      {blogData ? (
        blogData.map((blog) => (
          <BlogPreview
            name={blog.name}
            description={blog.description}
            image={blog.image}
            posted={blog.posted}
            text={blog.text}
          />
        ))
      ) : (
        <div>No blogs found</div>
      )}
    </div>
  );
}
