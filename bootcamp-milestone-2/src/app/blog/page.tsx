import React from "react";
import "../globals.css";
import BlogPreview from "../components/blogPreview";
import blogs from "../blogData";

export default function Blog() {
  return (
    // replace everything in between the <header> & <header /> tags
    // with your navbar code from your earlier milestones
    <div>
      {blogs.map(
        (blog) => (
          <BlogPreview {...blog} />
        ) // This is how we call the component
      )}
    </div>
  );
}
