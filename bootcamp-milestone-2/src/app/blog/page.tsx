import React from "react";
import style from "./page.module.css";
import blogs from "./blogData";
import BlogPreview from "@/components/blogPreview"

export default function Blogs() {
  return (<div>
			<main>
            <h1 className={style["page-title"]}>Blog</h1>
            <div className={style["blogList"]} id="blogList">
            {blogs.map(blog => 
            <BlogPreview 
            slug={blog.slug}
            description={blog.description}
            title={blog.title}
            date={blog.date}
            /> // This is how we call the component
            )}
            </div>
        </main>
			</div>) 
}