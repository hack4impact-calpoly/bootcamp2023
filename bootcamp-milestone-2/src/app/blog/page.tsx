import BlogPreview from "@/components/blogPreview";
import connectDB from "@/helpers/db";
import Blog from "@/database/blogSchema";

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

export default async function BlogPreviews() {
  const blogs = await getBlogs();

  return !blogs ? null : (
    <>
      <h1 className="page-title">Blog</h1>
      <div id="blog-container">
        {blogs.map(blog => 
          <BlogPreview blog={blog} />
        )}
      </div>
    </>
  )
}