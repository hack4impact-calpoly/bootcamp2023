import BlogPreview from "../components/blogPreview";
import blogSchema from "@/database/blogSchema";
import connectDB from "@/helpers/db";

async function getBlogs() {
  //connect to the database
  await connectDB();
  try {
    const blogs = await blogSchema.find({}).orFail();
    return blogs;
  } catch (err) {
    return null;
  }
}

export default async function Blog() {
  const blogPosts = await getBlogs();
  if (blogPosts) {
    return (
      <div>
        <h1 className="page-title">My Blogs</h1>
        <main>
          {blogPosts.map((blog) => (
            <BlogPreview
              title={blog.title}
              date={blog.date}
              description={blog.description}
              slug={blog.slug}
              pageDescription={blog.pageDescription}
              picSlug1={blog.picSlug1}
              picSlug2={blog.picSlug2}
              picSlug3={blog.picSlug3}
              comments={blog.comments}
            />
          ))}
        </main>
      </div>
    );
  } else {
    return (
      <div>
        <h1>No blog posts found</h1>
      </div>
    );
  }
}
