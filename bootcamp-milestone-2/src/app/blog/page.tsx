import React from "react";
import blogs from "./blogData.ts";
import BlogPreview from "../components/blogPreview";

export default function Blogs() {
  return (
    <div>
      {blogs.map((blog) => (
        <BlogPreview {...blog} />
      ))}
    </div>
  );
}
