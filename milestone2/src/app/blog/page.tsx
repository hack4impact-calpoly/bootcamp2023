import React from "react";
import BlogPreview from "@/components/blogPreview";
import blogs from "../blogData";

export default function Blog() {
  return (
    <>
      <div className="blog-container"></div>
      {blogs.map(
        (blog) => (
          <BlogPreview key={blog.title} {...blog} />
        ) // This is how we call the component
      )}
    </>
  );
}
