import Link from "next/link";

import styles from "./page.module.css";
import blogData from "../../data/blogData.json";

export default function Blog() {
  return (
    <>
      <div className={styles.blog}>
        <div className={styles.blogInnerContainer}>
          <h1 className={styles.pageTitle}>Welcome to the Blog!</h1>
          <div className={styles.blogPosts} id="blog-posts">
            {blogData.map((blogPostObj) => (
              <div key={blogPostObj.postID}>
                <Link
                  href={"/blog/" + blogPostObj.slug}
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <div className={styles.blogPost}>
                    <div className={styles.blogPostTitleDate}>
                      <h2 className="blogPostTitle">{blogPostObj.title}</h2>
                      <p className="blogPostDate">{blogPostObj.date}</p>
                    </div>
                    <p className="blogPostMessage">{blogPostObj.message}</p>
                  </div>
                </Link>
                {blogPostObj.postID != 1 ? <h1 className={styles.blogPostTilda}>~</h1> : null}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

