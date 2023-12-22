import BlogPreview from "@/components/blogPreview";
import "./globals.css";
import connectDB from "@/helpers/db";
import BlogModel from "@/database/blogSchema";
//import { useEffect, useState } from "react";

export default function Home() {

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
            </p>
            <p>
              I'm a junior computer science student at Cal Poly interested in
              full-stack development,<br></br>
              and I recently transferred from Santa Barbara City College.
              <br></br>I was born and raised in Iran and in fact lived there my
              <em>entire</em> life - until 2 years ago, <br></br>
              though it may be hard to tell by my accent (or lack thereof?)
              <br /><br />
              I've recently become interested in AI and machine learning and am excited to learn more.
            </p>  
            <p>To keep up with my latest interests, make sure to check out my blogs!</p>
            
            <p>Welcome to my website! Grab a cookie on your way out.</p>
            
          </div>
        </div>
      </main>
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


{/* <p>
              My name is <strong>Melika</strong> and this is my cozy little
              corner of the internet.
              <br></br>
            </p>
            <p>
              I'm a junior computer science student at Cal Poly interested in
              full-stack development,<br></br>
              and I recently transferred from Santa Barbara City College.
              <br></br>I was born and raised in Iran and in fact lived there my
              <em>entire</em> life - until 2 years ago, <br></br>
              though it may be hard to tell by my accent (or lack thereof?)
              <p></p>
              I've recently become interested in AI and machine learning and am excited to learn more.
            </p>  
            <p>To keep up with my latest interests, make sure to check out my blogs!</p>
            
            <p>Welcome to my website! Grab a cookie on your way out.</p> */}