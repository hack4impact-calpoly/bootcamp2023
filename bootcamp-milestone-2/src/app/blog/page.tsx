import styles from './page.module.css'
import React from 'react';
import "@/global.css";
import Link from 'next/link';
import "@/app/full.css" 
import BlogPreview from "@/components/blogPreview";
import blogs from "@/app/blogData";
// Blog page

export default function Blog() {
  return (
    <div>
        <main>
            <main className="main">      
                <div className="content" id="blog">
                    <ul id="blog-list" className="blog-list"></ul>
                </div>
            </main>
            <h1 className="page-title">MY BLOG</h1>
            Hello World! This is my blog.
            <div className="container" id="container"></div>
        </main>
        {blogs.map((blog) => (
        <BlogPreview // This is how we call the component
          title={blog.title}
          description={blog.description}
          date={blog.date}
          image={blog.image}
          //text={blog.text}
          slug={blog.slug}

        />
      ))}x
        <footer>© 2023 Dhanvi Ganti | All Rights Reserved</footer>
    </div>
  )
}

