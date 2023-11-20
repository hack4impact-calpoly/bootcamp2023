import React from "react";
import "../globals.css";
import BlogPreview from "../components/blogPreview";

import connectDB from "../helpers/db";
import BlogModel from "../database/blogSchema";

async function getBlogs() {
  await connectDB(); // function from db.ts before

  try {
    // query for all blogs and sort by date
    const blogs = await BlogModel.find().sort({ date: -1 }).orFail();
    // send a response as the blogs as the message
    return blogs;
  } catch (err) {
    return null;
  }
}

export default async function Blog() {
  const blogData = await getBlogs();

  return (
    // replace everything in between the <header> & <header /> tags
    // with your navbar code from your earlier milestones

    <div>
      {blogData &&
        blogData.map((blog) => (
          <BlogPreview
            key={blog.blogID}
            title={blog.title}
            date={blog.date}
            description={blog.description}
            content={blog.content}
            slug={blog.slug}
            comments={blog.comments}
          />
        ))}
    </div>
  );
}
