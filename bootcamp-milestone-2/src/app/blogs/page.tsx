import BlogPreview from "@/components/BlogPreview/BlogPreview";
import { blogs } from "../data/blogData";
import connectDB from "@/helpers/db";
import Blog from "@/database/blogSchema";


async function getBlogs(){
  await connectDB() // function from db.ts before

  try {
      // query for all projects
	    const blogs = await Blog.find().sort({ date: -1 }).orFail()
      // send a response as the blogs as the message
      return blogs
  } catch (err) {
      return null
  }
}

export default async function Blogs() {

  let blogs = await getBlogs();
  
  return (
    <main className="flex flex-col p-20">
      <h3 className="text-3xl font-semibold text-white px-5 py-5">Blogs</h3>

      <ul className="overflow-y-scroll">
        {blogs?.map((blog) => {
          return (
            <li className="w-1/2" key={blog.slug}>
              <BlogPreview title={blog.title} content={blog.content} date={blog.date} img={blog.img} slug={blog.slug} />
            </li>
          );
        })}
      </ul>
    </main>
  );
}
