import styles from "./blog.module.css";
import connectDB from "../database/db";
import Blog from "../database/blogSchema";

export default async function BlogList() {
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

  function BlogPreview({ blog, index }: { blog: any; index: number }) {
    return (
      <div className={styles.blogpost}>
        <h4 className={styles.smallHeading}>{blog.title}</h4>
        <p className={styles.date}>{blog.date.toString()}</p>
        <p className={styles.description}>{blog.description}</p>
      </div>
    );
  }

  const blogs = await getBlogs();

  return (
    <div className={styles.blog}>
      <h1 className={styles.blogtitle}>Blog</h1>
      <div className={styles.blogentry}>
        {blogs &&
          blogs.map((blog: any, index: number) => (
            <BlogPreview key={index} blog={blog} index={index} />
          ))}
      </div>
    </div>
  );
}
