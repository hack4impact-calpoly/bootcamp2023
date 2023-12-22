import connectDB from "@/helpers/db";
import BlogModel from "@/database/blogSchema";
import BlogPreview from "@/components/blogPreview";
import Image from "next/image";



export default function Blogs() {

    async function getBlogs() {
        await connectDB(); // function from db.ts before
      
        try {
          // query for all blogs and sort by date
          const blogs = await BlogModel.find().sort({ date: -1 }).orFail();
          console.log(blogs);
          // send a response as the blogs as the message
          return blogs;
        } catch (err) {
          return null;
        }
      }

    return(
        <div>
            <main className="index-main">
            <h1 className="index-title">Personal Blogs</h1>
            <div className="about">
                {getBlogs().then(
                    (blogs) =>
                    blogs &&
                    blogs.map((blog) => (
                        <BlogPreview
                        id = {blog.id}
                        title={blog.title}
                        date={blog.date}
                        description={blog.description}
                        slug={blog.slug}
                        ></BlogPreview>
                    ))
                )}
            </div>
    
            </main>
        </div>
    )

}

