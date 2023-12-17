import React from "react";
import styles from "./blogPreview.module.css";
import Image from "next/image";
import Blog from "../database/blogSchema";

export default function BlogPreview(props: typeof Blog) {
  const blog_info = (props as any)._doc;
  return (
    // replace everything between the <div> & </div> tags
    // with your code from earlier milestones
    <>
      <main>
        <a href={"/blogs/" + blog_info.slug}>
          <div className={styles.blog_div}>
            <h1>{blog_info.title}</h1>
            <p>{blog_info.date.toLocaleString()}</p>
            <p>{blog_info.description}</p>
          </div>
        </a>
      </main>
      <footer className="footer">
        © 2023 Tammy Si&apos;s personal website | all rights reserved
      </footer>
    </>
  );
}
