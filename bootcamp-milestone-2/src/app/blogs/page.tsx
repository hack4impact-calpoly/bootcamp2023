import BlogPreview from "../components/blogPreview";
import blogs from "../blogData";
import style from "./page.module.css";

export default function Blog() {
  return (
    <div className={style.blog}>
      <h1 className={style.title}>Blogs</h1>
      {blogs.map(
        (blog) => (
          <BlogPreview
            slug={blog.slug}
            title={blog.title}
            description={blog.description}
            image={blog.image}
            date={blog.date}
            text={blog.text}
          />
        ) // This is how we call the component
      )}
    </div>
  );
}
