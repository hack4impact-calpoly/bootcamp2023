import Link from "next/link";
import BlogPreview from '@/app/components/blogPreview'
import connectDB from "@/helpers/db";
import blogSchema from "@/database/blogSchema";

async function getBlogs(){
	await connectDB() // function from db.ts before

	try {
			// query for all blogs and sort by date
	    const blogs = await blogSchema.find().sort({ date: -1 }).orFail()
			// send a response as the blogs as the message
	    return blogs
	} catch (err) {
	    return null
	}
}

export default async function Blog() {
    const blogPosts = await getBlogs();
    if (blogPosts) {
        return(
            <div>
                <h1 className="page-title">My Blog!</h1>
                <p>Hello! Welcome to my blog!</p>
            <main>
                {blogPosts.map(blog => 
                <BlogPreview
                key = {blog._id}
                title={blog.title}
                date={blog.date}
                description={blog.description}
                slug={blog.slug}
                piccap={blog.piccap}
                picslug={blog.picslug}
                comments={blog.comments}
                />
                )}
            </main>
            </div>
        )
    }   else {
            return (
                <div>
                    <h1>No blog posts</h1>
                </div>
            )
    }
}