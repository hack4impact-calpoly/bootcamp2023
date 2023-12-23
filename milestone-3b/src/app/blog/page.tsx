/* eslint-disable react/jsx-key */
import React from "react";
import BlogPreview from "../components/blogPreview";
import connectDB from "../helpers/db";
import blogSchema from "../database/blogSchema";

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

export default async function Blog() {
  const blogPosts = await getBlogs();
  if (blogPosts) {
    return (
      <>
        <main>
          {blogPosts.map((blog) => (
            <BlogPreview
              title={blog.title}
              slug={blog.slug}
              date={JSON.stringify(blog.date)}
              description={blog.description}
              content={blog.content}
              comments={blog.comments}
              image={blog.image}
              key={blog._id}
            />
          ))}
        </main>
        <footer className="footer">
          © 2023 Angela Chen | All Rights Reserved
        </footer>
      </>
    );
  } else {
    // handling null that may be returned if no blogs are found
    return (
      <>
        <main>
          <h1>No Blogs Found</h1>
        </main>
        <footer className="footer">
          © 2023 Angela Chen | All Rights Reserved
        </footer>
      </>
    );
  }
}
