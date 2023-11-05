import BlogPreview from "@/components/blogPreview";
import blogs from "../blogData";

export default function BlogPreviews() {
  return (
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