import styles from "./page.module.css";
import React from "react";
import BlogPreview from "./components/blogPreview/blogPreview";
import { blogs } from "./pages/blog/blogData";

export default function Home() {
  return (
    <div>
      <h1>Welcome to my Website!</h1>
      <p>
        <strong>About me: </strong> I am a second year computer science student
        at Cal Poly Slo.
        <br></br> I work as a <strong> Student Intern</strong> at the County of
        San Luis Obispo.
      </p>


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
}
