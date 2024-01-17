import React from "react";
import "../../../styles/styles.css"
import BlogPreview from "@/components/blogPreview";
import connectDB from "@/helpers/db";
import Blogs from "@/database/blogSchema";

// export default function Blog() {
//     return(
//         <div>
//             <main>
//                 {blogs.map((blog, index) => (
//                     <BlogPreview key={index} {...blog}/>
//                 ))}
//             </main>
//         </div>
//     );
// }

async function getBlogs(){
	await connectDB() // function from db.ts before

	try {
	    const blogs = await Blogs.find().sort({ date: -1 }).orFail()
	    return blogs
	} catch (err) {
	    return null
	}
}

export default async function Blog(){
    const blogs = await getBlogs()
    return(
        <div>
            <main>
                {blogs == null  ? (
                    <div>
                        No Blogs
                    </div>
                ): 
                <div>
                    {blogs.map(blog =>
                         <BlogPreview key={blog._id} {...blog.toObject()} />
                    )}
                </div>
                }
            </main>
        </div>
    );
}