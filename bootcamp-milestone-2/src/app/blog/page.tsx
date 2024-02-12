import React from "react";
import BlogPreview from "@/app/components/blogPreview";
import Navbar from "@/app/components/Navbar";
import styles from "../app/components/blogPreview.module.css";
import blogs from "../blogData";
import Link from "next/link";
import Footer from "../components/footer";

export default function Blog() {
    return(
        <main>
        <Navbar/>
        <section className="blog-previews">
        {blogs.map(blog => 
        //   <BlogPreview key={blog.slug} {...blog} />
            <BlogPreview {...blog} />
            
            // title={blog.title}
            // date={blog.date}
            // description={blog.description}
            // slug={blog.slug}
        )}
        {/* {blogs.map((blog) => (
        //   <BlogPreview key={blog.slug} {...blog} />
            <BlogPreview {...blog}
            
            // title={blog.title}
            // date={blog.date}
            // description={blog.description}
            // slug={blog.slug}
            />
        ))} */}
        </section>
        <Footer/>
        </main>
    )
}



























// const blogs: Blog[] = [
//     {
//         title: "First Blog Post",
//         date:  "12/21/2018",
//         description:  "This is my very first blog post. Welcome!",
//         slug: "firstblog",
//     },
//     {
//         title: "Second Blog Post",
//         date:  "04/23/2023",
//         description:  "I am still alive. Welcome to my second blog post.",
//         slug: "secondblog",
//     }
// ];

// return (
//     <div>
//         <Navbar/>
//         <main>
//             <h1 className="blog-title">Blog #1</h1>
//             {blogs.map(blog => 
//                 <BlogPreview /> // This is how we call the component
//             )}
//         </main>
//     </div>
// )