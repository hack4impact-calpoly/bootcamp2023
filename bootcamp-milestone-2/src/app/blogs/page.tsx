import BlogPreview from "@/components/blogPreview";
import connectDB from "@/helpers/db";
import BlogModel, { Blog } from "@/database/blogSchema";

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
            return <BlogPreview {...blog} />;
          };
          return logAndRender();
        })}
      </div>
    );
    
  }
}

async function getBlogs(): Promise<Blog[] | null> {
  await connectDB(); // function from db.ts before

  try {
    // query for all blogs and sort by date
    const blogs = await BlogModel.find().sort({ date: -1 }).lean();
    const mappedBlogs: Blog[] = blogs.map((blog) => {
      const { _id, ...rest } = blog as Blog & { _id: unknown }; // Exclude _id
      return rest;
    });
    // send a response as the blogs as the message
    return mappedBlogs as Blog[];
  } catch (err) {
    return null;
  }
}

