import BlogPreview from "../../components/blogPreview";
import connectDB from "@/db";
import IBlog from "../../database/blogSchema";

//fetches the blogs from the Database
async function getBlogs() {
  await connectDB(); // function from db.ts before
  try {
    // query for all blogs and sort by date
    const blogs = await IBlog.find().sort({ date: -1 }).orFail();
    // send a response as the blogs as the message
    return blogs;
  } catch (err) {
    return null;
  }
}

export default async function Home() {
  const blogPosts = await getBlogs();

  if (blogPosts) {
    return (
      <main>
        <div className="blogsHolder">
          <h1 className="page-title">My Blog Posts!</h1>
          <div className="blogContent">
            {blogPosts.map((blog: IBlog) => (
              <BlogPreview
                key={blog.slug}
                date={blog.date}
                title={blog.title}
                description={blog.description}
                slug={blog.slug}
                image={blog.image}
              />
            ))}
          </div>
        </div>
      </main>
    );
  }
}
