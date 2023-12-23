import React from "react";
import BlogPreview from "@/components/blogPreview";
import Blog from "@/database/blogSchema";
import connectDB from "@/helpers/db";
import PageTitle from "@/components/page-title";

async function getBlogs(){
    
	await connectDB() // function from db.ts before

	try {
			// query for all blogs and sort by date
	    const blogs = await Blog.find().sort({ date: -1 }).orFail();
			// send a response as the blogs as the message
	    return blogs;
	} catch (err) {
    console.log(err);
	    return null;
	}
}

export default async function BlogPage() {
  const blogs = await getBlogs();
  console.log("preview page");
  console.log(blogs);
  if (blogs == null) {
    return (
      <main>
          <PageTitle title="Blog"/>

        <p>No blogs</p>
      </main>
    );
  } else {
    return (
      <main className="blog-page">
        <PageTitle title="Blog"/>
          {blogs.map((blog) => (
            <BlogPreview 
              title={blog.title}
              description={blog.description}
              date={blog.date}
              slug={blog.slug}
              content={blog.content}
              image={blog.image}
              link={blog.link}
              comments={blog.comments}
              key=""
            />
          ))}
      </main>
    );
  }
}




