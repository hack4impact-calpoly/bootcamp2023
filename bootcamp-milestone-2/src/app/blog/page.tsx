import React from "react"
import blogs from '@/app/blogData';
import BlogPreview from '@/app/components/blogPreview';


export default function Blog() {
    return (
        <>
        {blogs.map(blog => 
        <BlogPreview
            title={blog.title}
            description={blog.description}
            date={blog.date}
            slug={blog.slug}
        />
        )}
            <main>
            <div className="blog-container" id="blog">
            </div>
            </main>
            <footer className="footer">© 2023 My Website | All Rights Reserved</footer>
        </>
    )
  }
  