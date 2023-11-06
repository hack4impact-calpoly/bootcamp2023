import styles from "./blog.module.css";
import { blogs, BlogPreview } from "./blogs";

export default function BlogList() {
  return (
    <div className={styles.blog}>
      <h1 className={styles.blogtitle}>Blog</h1>
      <div className={styles.blogentry}>
        {blogs.map((blog, index) => (
          <BlogPreview key={index} blog={blog} index={index} />
        ))}
      </div>
    </div>
  );
}
