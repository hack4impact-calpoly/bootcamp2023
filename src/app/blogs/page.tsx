import React from "react";
import Link from 'next/link';
import Image from 'next/image';
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import "../globals.css";
import BlogPreview from '@/components/blogPreview'
import connectDB from "@/helpers/db"
import BlogModel from "@/database/blogSchema"


async function getBlogs(){
	await connectDB() // function from db.ts before

	try {
			// query for all blogs and sort by date
	    const blogs = await BlogModel.find().sort({ date: -1 }).orFail()
			// send a response as the blogs as the message
	    return blogs
	} catch (err) {
	    return null
	}
}

export default async function Blog () {
    const blogData = await getBlogs();

	if(!blogData) {
		return (
			<main>
			  <h1 className="page-title">Blog</h1>
			  <p>No blogs at the moment.</p>
			</main>
		  );
	}

    return <div className="Blog">
	<h1 className="page-title">Blog</h1>
    {blogData && blogData.map((blog) => 
		<BlogPreview 
		key={blog.slug}
		title={blog.title}
		date={blog.date}
		description={blog.description}
		content={blog.content}
		slug={blog.slug}
		comments={blog.comments}
		 />
    )}
</div>
}