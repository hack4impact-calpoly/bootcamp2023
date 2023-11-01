import React from "react";
import blogs from "../blogData";
import { Blog } from "../blogData";
import Link from "next/link";
import BlogPreview from "@/components/blogPreview";

export default function Blog() {
    return (
        <main>
            <h1 className="blog">Blog</h1>
            <div className="blog-container">
                {blogs.map((blog) => (
                    <BlogPreview
                        title={blog.title}
                        description={blog.description}
                        slug={blog.slug}
                        date={blog.date}
                    />
                ))}
            </div>
        </main>
    );
}
