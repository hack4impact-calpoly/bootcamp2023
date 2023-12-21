import React from "react";
import style from "./page.module.css";
import BlogPreview from "@/components/blogPreview"
import { getBlogs } from "./blogData";

export default async function Blogs() {

  const blogList = await getBlogs();

  if(blogList == null) {
    return(
      <div>No Blogs</div>
    );
  }
  else {
    return (<div>
        <main>
              <h1 className={style["page-title"]}>Blog</h1>
              <div className={style["blogList"]} id="blogList">
              {blogList.map(blog => 
              <BlogPreview 
                  slug={blog.slug}
                  description={blog.description}
                  title={blog.title}
                  date={blog.date} 
                  content={""}
                  comments={[]}              /> // This is how we call the component
              )}
              </div>
          </main>
        </div>);
  }
}