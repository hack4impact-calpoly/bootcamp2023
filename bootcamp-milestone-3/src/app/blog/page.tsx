import React from 'react';
import BlogPreview from '../components/blogPreview';
import Blog from '../database/blogSchema';
import connectDB from "../helpers/db";

async function getBlogs(){
	await connectDB() // function from db.ts before

	try {
			// query for all blogs and sort by date
	    const blogs = await Blog.find().sort({ date: -1 }).orFail()
			// send a response as the blogs as the message
	    return blogs
	} catch (err) {
	    return null
	}
}

export default async function BlogHome() {
    const blogs = await getBlogs()
    if (blogs == null) {
        return (<main className="container-fluid d-flex flex-column align-items-center">
            <h1><b>Lindsay's College Blog</b></h1>
            <div style={{margin: "0", width: "70%"}}>
                <p>errorr finding blogs</p>
            </div>
        </main>)
    }
    else {
        return (<main className="container-fluid d-flex flex-column align-items-center">
            <h1><b>Lindsay's College Blog</b></h1>
            <div style={{margin: "0", width: "70%"}}>
                {blogs.map(blog => 
                <BlogPreview {...blog.toObject()} /> // This is how we call the component
		        )}
            </div>
        </main>)
    }
}