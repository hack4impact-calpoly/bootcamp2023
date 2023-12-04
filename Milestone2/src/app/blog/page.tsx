import React from "react";
import blogs from "../blogData";
// import { Blog } from "../blogData";
import BlogPreview from "@/components/blogPreview";

export default function Blog() {
    return (
        <main>
            <center>
            <h1 className="blog">Blog</h1>
            <div className="blog-container">
                {blogs.map((blog) => (
                    <BlogPreview
                        title={blog.title}
                        description={blog.description}
                        slug={blog.slug}
                        image={blog.image}
                        date={blog.date}
                    />
                ))}
            </div>
            </center>
        </main>
    );
}
