"use client";
import React, { useState, useEffect } from "react";
import BlogPreview from "@/components/blogPreview";
import connectDB from "../../helpers/db";
import Blogs, { IBlog } from "../../database/blogSchema";

export default function Blog() {
    const [blogs, setBlogs] = useState<IBlog[] | null>(null);

    useEffect(() => {
        // Call the asynchronous function
        fetchData();
    }, []); // The empty dependency array ensures useEffect runs only once on mount

    // Define an asynchronous function within useEffect to use await
    async function fetchData() {
        try {
            const fetchedBlogs: IBlog[] | null = await getBlogs();
            setBlogs(fetchedBlogs ?? []);
        } catch (error) {
            console.error("Error fetching blogs:", error);
            // Handle the error as needed
        }
    }
    async function getBlogs() {
        try {
            await connectDB(); // function from db.ts before

            // query for all blogs and sort by date
            const blogs = await Blogs.find().sort({ date: -1 }).orFail();
            // send a response as the blogs as the message
            return blogs;
        } catch (err) {
            console.error(err);
            return null;
        }
    }

    return (
        <main>
            <h1 className="blog">Blog</h1>
            <div className="blog-container">
                {blogs?.map((blog) => (
                    <BlogPreview
                        title={blog.title}
                        description={blog.description}
                        slug={blog.slug}
                        image={blog.image}
                        date={blog.date}
                    />
                ))}
            </div>
        </main>
    );
}
