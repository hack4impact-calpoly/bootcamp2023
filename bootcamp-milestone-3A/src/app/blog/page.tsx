import React from "react"
import blogs from '@/app/blogData';
import BlogPreview from '@/app/components/blogPreview';


export default async function Blog() {
    return (
        <>
        
        {(await blogs).map((blog: { title: string; description: string; slug: string; date: string}) => 
        <BlogPreview
            title={blog.title}
            description={blog.description}
            date={blog.date}
            slug={blog.slug}
        />
        )}            
            <footer className="footer">© 2023 My Website | All Rights Reserved</footer>
        </>
    )
  }
  