import style from "./blog.module.css";
import blogs from "../blogData";
import BlogPreview from "../../components/blogPreview";
import connectDB from "../../helpers/db";
import BlogComp from "../../database/blogSchema";
import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";

async function getBlogs() {
  const connection = await connectDB(); // function from db.ts before

  try {
    // query for all blogs and sort by date
    const blogs = await BlogComp.find().sort({ date: -1 }).orFail();
    // send a response as the blogs as the message
    return blogs;
  } catch (err) {
    return null;
  }
}

export default async function Blog() {
  const blogPosts = await getBlogs();

  if (blogPosts) {
    return (
      <div>
        <main>
          <h1 className={style.pageTitle}>Blog</h1>
          <h2 className={style.pageSubtitle}>Posts</h2>
          <div className={style.blogList} id={style.blogList}></div>

          {blogPosts.map((blog) => (
            <BlogPreview
              key={blog.title}
              title={blog.title}
              date={blog.date}
              description={blog.description}
              slug={blog.slug}
              pic={"/cinque_terre_1.jpg"}
            />
          ))}
        </main>

        {/* <script src="./src/blog.js"></script> */}
      </div>
    );
  } else {
    <div className="flex flex-col gap-16">
      <h1 className="text-2xl font-bold">No blog posts found</h1>
    </div>
  }
}
