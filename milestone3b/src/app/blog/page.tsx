/*import React from 'react';
import BlogPreview from '../components/blogPreview';
import { blogs } from './blogData';
import '../../../styles.css';
import connectDB from "@/helpers/db";
import Blogs from "../database/blogSchema"

// export default function BlogList() {
//   return (
//     <div>
//       {blogs.map((blog, index) => (
//         <BlogPreview key={index} {...blog} />
//       ))}
//     </div>
//   );
// }

async function getBlogs(){
	await connectDB() // function from db.ts before

	try {
			// query for all blogs and sort by date
	    const blogs = await Blogs.find().sort({ date: -1 }).orFail()
			// send a response as the blogs as the message
	    return blogs
	} catch (err) {
	    return null
	}
}

export default async function Blog() {
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
                    {blogs.map(blog =>
                        <BlogPreview  {...blog.toObject()} />
                    )}
                </div>
            }
        </div>
    </main>
        
    );

}
*/

/*
import React from 'react';
import BlogPreview from '../components/blogPreview';
import '../../../styles.css';
import connectDB from "@/helpers/db";
import Blogs from "../database/blogSchema";
import { blogs as defaultBlogs } from '../blog/blogData';

async function getBlogs(){
    await connectDB(); // function from db.ts before

    try {
        // query for all blogs and sort by date
        const blogs = await Blogs.find().sort({ date: -1 }).orFail();
        // send a response as the blogs as the message
        return blogs;
    } catch (err) {
        return null;
    }
}

export default async function Blog() {
    const blogs = await getBlogs();

    return (
        <main>
            <h2 className="page-title">Blogs</h2>
            <div>
                {blogs === null || blogs.length === 0 ? (
                    <div>
                        {defaultBlogs.map((blog, index) => (
                            <BlogPreview key={index} {...blog} />
                        ))}
                    </div>
                ) : (
                    <div>
                        {blogs.map((blog, index) => (
                            <BlogPreview key={index} {...blog.toObject()} />
                        ))}
                    </div>
                )}
            </div>
        </main>
    );
}
*/

import React from "react";
import BlogPreview from '@/app/components/blogPreview';
import '../../../styles.css';
import connectDB from "@/helpers/db";
import Blogs from "../../app/database/blogSchema"

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
                    No blogsssssssksks
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