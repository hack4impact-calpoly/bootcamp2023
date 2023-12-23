import React from "react";
import BlogPreview from '@/components/blogPreview';
import connectDB from "@/database/helpers/db";
import Blogs from "@/database/blogSchema";


async function getBlogs()
{
	await connectDB() // function from db.ts before

	try {
			// query for all blogs and sort by date
	    const blogs = await Blogs.find().sort({ date: -1 }).orFail()
			// send a response as the blogs as the message
	    return blogs
	} catch (err) 
    {
        return null
	}
}

export default async function Blog(){
    const blogs = await getBlogs();
    //console.log('Blogs:', blogs);

    return (
    <main>
        <h2 className="page-title">Blogs</h2>
        <div>
            {blogs?.map(blog => 
                <BlogPreview  title={blog.title}
                slug = {blog.slug}
                date = {(blog.date)}
                description={blog.description}
                content={blog.content}
                comments={blog.comments} />
		    )}
        </div>
    </main>
    );
    };