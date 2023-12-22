import Blog from "@/database/blogSchema";
import connectDB from "@/helpers/db";
import Link from "next/link";
import { NextRequest, NextResponse } from 'next/server';
import blogSchema from '@/database/blogSchema';
import IBlog from '@/blogData';
import BlogPreview from "../../../components/blogPreview";

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
    throw error; // Re-throw the error to handle it elsewhere if needed
  }
}

async function getBlog(slug: string) {
	try {
		const res = await fetch(`http://localhost:3000/blog/{slug}`, {
			cache: "no-store",	
		})

		if (!res.ok) {
			throw new Error("Failed to fetch blog");
		}

		return res.json();
	} catch (err: unknown) {
		console.log(`error: ${err}`);
		return null;
	}
}

export default async function blog({ params }: Props) {
  const slug = params.slug;
  const b = await getBlog(slug);
  const blogs = await getBlogs();
  if (!blogs) {
    return(
      <div>Blog Not Found</div>
    );
  }

  
  return (
    <div>
      <main style={{textAlign: 'center'}}>
        <h1 style={{textDecoration: 'underline'}}>Welcome to my Blog</h1>
        <div id="blog-posts" style={{margin: '50px;'}}></div>
      </main>
      {blogs.map((blog) => 
        <div style={{textAlign: 'center', fontSize: '25px', paddingBottom: '100px'}}>
          <BlogPreview
            title={blog.title}
            date={blog.date}
            description={blog.description}
            image={blog.image}
            slug={blog.slug}
            comments={blog.comments}
          />
        </div>
        )
      }
    </div>
  ); 
}

//href={`/blog/${blog.slug}`}