import React from "react";
import BlogPreview from "@/app/components/blogPreview/blogPreview";
import RootLayout from "@/app/layout";
import { blogs } from "./blogData";
import connectDB from "@/database/db";
import Blogs from "@/database/blogSchema";



async function getBlogs(){
	console.log("getBlogs called")
    await connectDB() // function from db.ts before

	try {
			// query for all blogs and sort by date
	    const blogs = await Blogs.find().sort({ date: -1 }).orFail()
			// send a response as the blogs as the message
	    console.log("works to here")
        return blogs
	} catch (err) {
	    console.log(err)
        return null
	}
}

export default async function Blog() {
    console.log("calling blogs")
    const blogs = await getBlogs();
    return(
    <main>
        <h2 className="page-title">Blogs</h2>
        <div>
            {blogs == null ? (
                <div>
                    No blogs
                </div>):
                <div>
                    {blogs.map(blog => (
                        <BlogPreview key={blog._id} {...blog.toObject()} />
                    ))}
                </div>
            }
        </div>
    </main>

    );

}



