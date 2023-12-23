import BlogPreview from "../components/blogPreview";
//import blogs from "../blogData";
import connectDB from "../helpers/db";
import BlogDB, { IBlog } from "../database/blogSchema";
import { useState } from "react";
import { set } from "mongoose";

async function getBlogs() {
  await connectDB(); // function from db.ts before

  try {
    // query for all blogs and sort by date
    const blogs = await BlogDB.find().sort({ date: -1 }).orFail();
    // send a response as the blogs as the message
    return blogs;
  } catch (err) {
    return null;
  }
}

async function Blog() {
  const blogsDB = await getBlogs();

    return (
      <div>
        <h1 className="page-title">Favorite Restaurants</h1>
        <div className="blog" id="blog">
          {blogsDB?.map((blog : IBlog) => (
            // eslint-disable-next-line react/jsx-key
            <BlogPreview
              title={blog.title}
              slug={blog.slug}
              date={blog.date}
              description={blog.description}
              content={blog.content}
              comments={blog.comments}
            />
          ))}
        </div>
      </div>
    );
};

export default Blog;
