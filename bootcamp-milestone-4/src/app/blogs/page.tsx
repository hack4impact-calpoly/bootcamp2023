import BlogPreview from "../components/blogPreview";
import style from "./page.module.css";
import BlogModel from "../../database/blogSchema";
import connectDB from "../../helpers/db";
import { IBlog } from "../../database/blogSchema";

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

export default async function Blog() {
  const blogData = await getBlogs();
  return (
    <div className={style.blog}>
      <h1 className={style.title}>Blogs</h1>
      {blogData ? (
        blogData.map((blog: IBlog, index: number) => (
          <BlogPreview
            key={index}
            slug={blog.slug}
            title={blog.title}
            description={blog.description}
            date={blog.date}
            content={blog.content}
            img={blog.img}
            comments={blog.comments}
          />
        ))
      ) : (
        <div className={style.title}>No Entries</div>
      )}
    </div>
  );
}
