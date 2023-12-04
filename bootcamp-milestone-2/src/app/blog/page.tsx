import React from "react";
import BlogPreview from "../components/blogPreview";
import connectDB from "../database/db";
import Blog from "../database/blogSchema";

async function getBlogs() {
  await connectDB(); // function from db.ts before

  try {
    // query for all blogs and sort by date
    const blogsFromDB = await Blog.find({}).sort({ date: -1 }).orFail();
    // send a response as the blogs as the message
    return blogsFromDB;
  } catch (err) {
    return null;
  }
}

export default async function BlogLoader() {
  const blogPosts = await getBlogs();

  if (blogPosts) {
    return (
      <>
        <h1 className="page-title"> Blog</h1>
        <div className="post">
          {blogPosts.map((blog) => {
            return (
              <BlogPreview
                title={blog.title}
                date={blog.date}
                description={blog.description}
                image={blog.image}
                slug={blog.slug}
                comments={[]}
              />
            );
          })}
        </div>
      </>
    );
  } else {
    return <h1>No blog posts found</h1>;
  }
}
