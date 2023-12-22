import styles from "./page.module.css";
import blogs from "./blogData";
import BlogPreview from "@/components/blogPreview";
import "./globals.css";
import connectDB from "@/helpers/db";
import BlogModel from "@/database/blogSchema";
import type { Blog } from "@/app/blogData";
//import { useEffect, useState } from "react";

export default function Home() {


  async function getBlogs() {
    await connectDB(); // function from db.ts before
  
    try {
      // query for all blogs and sort by date
      const blogs = await BlogModel.find().sort({ date: -1 }).orFail();
      console.log(blogs);
      // send a response as the blogs as the message
      return blogs;
    } catch (err) {
      return null;
    }
  }


  // const handleData = async () => {
  //   try {
  //     const blogs = await getBlogs();

  //     if (blogs !== null) {
  //       return blogs.map((blog) => (
  //         <BlogPreview
  //           id={blog.id}
  //           title={blog.title}
  //           date={blog.date}
  //           description={blog.description}
  //           slug={blog.slug} 
  //           />
  //       ));
   
  //     } else {
  //       console.log('Data is null.');
  //     }
  //   } catch (error) {
  //     console.error('Error fetching data:', error);
  //   }
  // };

  return (
    <div>
      <main className="index-main">
        <h1 className="index-title">Hello World!</h1>
        <div className="about">
          <div className="about-text">
            <p>
              My name is <strong>Melika</strong> and this is my cozy little
              corner of the internet.
              <br></br>
              I'm a junior computer science student at Cal Poly interested in
              full-stack development,<br></br>
              and I recently transferred from Santa Barbara City College.
              <br></br>I was born and raised in Iran and in fact lived there my{" "}
              <em>entire</em> life - until 2 years ago, <br></br>
              though it may be hard to tell by my accent (or lack thereof?)
              <br></br>
              You can learn more about me on my blog page!
            </p>
            {getBlogs().then(
            (blogs) =>
              blogs &&
              blogs.map((blog) => (
                <BlogPreview
                  id = {blog.id}
                  title={blog.title}
                  date={blog.date}
                  description={blog.description}
                  slug={blog.slug}
                ></BlogPreview>
              ))
          )}
            <p>Welcome to my website! Grab a cookie on your way out.</p>
          </div>
        </div>
      </main>
      <br />
      <br />
    </div>
  );
}


// const [blogs, setBlogs] = useState<Blog[]>([]);
// blogs.map(blog => <BlogPreview
//   id = {blog.id}
//   title={blog.title}
//   date={blog.date}
//   description={blog.description}
//   slug={blog.slug}
// />)
