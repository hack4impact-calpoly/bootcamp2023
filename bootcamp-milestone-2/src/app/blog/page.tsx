import style from "./blog.module.css";
import blogs from "../blogData";
import BlogPreview from "../../components/blogPreview";

export default function Blog() {
  return (
    <div>
      <main>
        <h1 className={style.pageTitle}>Blog</h1>
        <h2 className={style.pageSubtitle}>Posts</h2>
        <div className={style.blogList} id={style.blogList}></div>

        {blogs.map((blog) => (
          <BlogPreview
            key={blog.title}
            title={blog.title}
            date={blog.date}
            description={blog.description}
            slug={blog.slug}
            pic={"/cinque_terre_1.jpg"}
          />
        ))}
      </main>

      {/* <script src="./src/blog.js"></script> */}
    </div>
  );
}
