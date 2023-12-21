import BlogPreview from "../components/blogPreview";
import connectDB from "../helpers/db";
import BlogModel from "../database/blogSchema";

async function getBlogs() {
  await connectDB(); // function from db.ts before

  try {
    // query for all blogs and sort by date
    const blogs = await BlogModel.find().sort({ date: -1 }).orFail();
    // send a response as the blogs as the message
    return blogs;
  } catch (err) {
    return null;
  }
}
export default function Blogs() {
  return getBlogs().then((blogs) => {
    return (
      <main>
        <h1 className="blog">Blog</h1>
        <div className="blog-container">
          {blogs?.map((blog) => (
            <BlogPreview
              key={blog._id}
              _id={blog._id}
              title={blog.title}
              description={blog.description}
              content={blog.content}
              date={blog.date}
              slug={blog.slug}
              comments={blog.comments}
            />
          ))}
        </div>
      </main>
    );
  });
}
