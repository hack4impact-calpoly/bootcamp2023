import React from "react";
import BlogPreview from "@/app/components/blogPreview/blogPreview";
import RootLayout from "@/app/layout";
import { blogs } from "./blogData";

const BlogPage = () => {
  return (
    <div>
      {blogs.map(
        (blog) => (
          <BlogPreview
            name={blog.name}
            description={blog.description}
            posted={blog.posted}
            slug={blog.slug}
          />
        ) // This is how we call the component
      )}
    </div>
  );
};

export default BlogPage;
