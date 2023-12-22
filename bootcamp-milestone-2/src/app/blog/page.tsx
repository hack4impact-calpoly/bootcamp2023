import BlogPreview from "@/components/blogPreview";
import connectDB from "@/helpers/db";
import BlogSchema from "@/database/blogSchema";
import { Blog } from "../blogData";

async function getBlogs(): Promise<null | Blog[]> {
	await connectDB();

	try {
    const blogs = await BlogSchema.find().sort({ date: -1 }).orFail();
    return blogs;
	} catch (err) {
    return null;
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