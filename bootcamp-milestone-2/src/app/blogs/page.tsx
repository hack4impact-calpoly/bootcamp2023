import BlogPreview from "@/components/blogPreview";
import connectDB from "@/helpers/db";
import Blog from "@/database/blogSchema";

export default async function Home() {
  const blogs = await getBlogs();
  if (blogs == null) {
    return (
      <div>
        <p>No Blogs Now</p>
      </div>
    );
  } else {
    return (
      <div>
        {blogs.map((blog) => {
          const logAndRender = () => {
            console.log(blog);
            return <BlogPreview key={blog.id} {...blog} />;
          };
          return logAndRender();
        })}
      </div>
    );
    
  }
}

async function getBlogs() {
  await connectDB(); // function from db.ts before

  try {
    // query for all blogs and sort by date
    const blogs = await Blog.find().sort({ date: -1 }).orFail();
    // send a response as the blogs as the message
    return blogs;
  } catch (err) {
    return null;
  }
}
