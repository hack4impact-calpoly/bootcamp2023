import React from "react";
import BlogPreview from "../components/blogPreview";
import blogs from "../blogData";

export default function Blog() {
  return (
    
        <main>
            {blogs.map(
            (blog) => (
                <BlogPreview {...blog} />
            ) 
            )}
        </main>
  );
}