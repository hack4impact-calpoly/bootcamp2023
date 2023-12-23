import Blog from "@/database/blogSchema";
import connectDB from "@/helpers/db";
import BlogPreview from "../../../components/blogPreview";
import mongoose from "mongoose";
import { NextRequest, NextResponse } from 'next/server';
import router from "next/navigation";
import IBlog from "@/blogData";

const url: string = process.env.MONGO_URI as string;
let connection: typeof mongoose;
const slug = url.split("/").pop();

type Props = {
  params: { slug: string }
}

async function getBlogs() {
  await connectDB();
  try {
    const blogs = await Blog.find().sort({ date: -1 }).orFail();
    console.log('All blogs:', blogs);
    return blogs;
  } catch (error) {
    console.error('Error fetching blogs:', error);
    throw error;
  }
}


export default async function blog(slug: string) {
  const blogs = await getBlogs();
  var b = null;
  for (const blog of blogs) {
    if (blog.slug === slug) {
      b = blog; // Found the blog with the specified slug
    }
  }

  if (b) {
    return (
      <div style={{ textAlign: 'center', fontSize: '25px', paddingBottom: '100px' }}>
        <BlogPreview
          title={b.title}
          date={b.date}
          description={b.description}
          image={b.image}
          slug={b.slug}
          comments={b.comments}
        />
      </div>
    )
  } else {
     return (
    <div>
      <main style={{ textAlign: 'center' }}>
        <h1 style={{ textDecoration: 'underline' }}>Welcome to my Blog</h1>
        <div id="blog-posts" style={{ margin: '50px' }}></div>
      </main>
      {/* Display other blogs */}
      {blogs.map((blog) => (
        <div key={blog.slug} style={{ textAlign: 'center', fontSize: '25px', paddingBottom: '100px' }}>
          <BlogPreview
            title={blog.title}
            date={blog.date}
            description={blog.description}
            image={blog.image}
            slug={blog.slug}
            comments={blog.comments}
          />
        </div>
      ))}
    </div>
  );
  }  
}

