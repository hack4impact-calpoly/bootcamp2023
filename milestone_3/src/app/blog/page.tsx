import React from "react";
import BlogPreview from "../components/blogPreview";
import connectDB from "../../helpers/db";
import BlogMod from "../../database/blogSchema"

async function getBlogs(){
	await connectDB() // function from db.ts before

	try {
			// query for all blogs and sort by date
	    const blogs = await BlogMod.find().sort({ date: -1 }).orFail()
			// send a response as the blogs as the message
	    return blogs
	} catch (err) {
	    return null
	}
}

export default async function Blog() {
  const blogs = await getBlogs();
  
  
    if (blogs) {
      return (
        <div>
          <main>
            <h1>Blog</h1>
            <h2>Posts</h2>
  
            {blogs.map((blog) => (
              <BlogPreview
                key={blog.title}
                title={blog.title}
                date={blog.date}
                description={blog.description}
                slug={blog.slug}
              />
            ))}
          </main>
  
        </div>
      );
    } else {
      return (
        <div>
          <h1>No blog posts found</h1>
        </div>
      );
    }
        
  
}