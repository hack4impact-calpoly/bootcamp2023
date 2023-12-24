// import connectDB from "@/helpers/db";
// import BlogModel from "@/database/blogSchema";
// import BlogPreview from "@/components/blogPreview";
// import Image from "next/image";



// export default function Blogs() {

//     async function getBlogs() {
//         await connectDB(); // function from db.ts before
      
//         try {
//           // query for all blogs and sort by date
//           const blogs = await BlogModel.find().sort({ date: -1 }).orFail();
//           console.log(blogs);
//           // send a response as the blogs as the message
//           return blogs;
//         } catch (err) {
//           return null;
//         }
//       }

//     return(
//         <div>
//             <main className="index-main">
//             <h1 className="index-title">Personal Blogs</h1>
//             <div className="about">
//                 {getBlogs().then(
//                     (blogs) =>
//                     blogs &&
//                     blogs.map((blog) => (
//                         <BlogPreview
//                         title={blog.title}
//                         date={blog.date}
//                         description={blog.description}
//                         slug={blog.slug}
//                         content={blog.content}
//                         comments={blog.comments}
//                         ></BlogPreview>
//                     ))
//                 )}
//             </div>
    
//             </main>
//         </div>
//     )

// }


import React from "react";
import BlogPreview from "@/components/blogPreview";
import blogSchema from "@/database/blogSchema";
import style from "./blog.module.css";
import connectDB from "@/helpers/db";

export default async function Blogs() {
  const blogs = await Blog();
  if (blogs == null) {
    return (
      <main>
        <div className={style.blog}>
          <h1 className={style.pageTitle}>Blog</h1>
          <p>No blogs currently.</p>
        </div>
      </main>
    );
  } else {
    return (
      <main>
        <div>
          <h1 className={style.pageTitle}>Blogs</h1>
          {blogs.map((blog) => (
            <BlogPreview
              title={blog.title}
              description={blog.description}
              date={blog.date}
              slug={blog.slug}
              image={blog.image}
              content={blog.content}
              comments={blog.comments}
            />
          ))}
        </div>
      </main>
    );
  }
}

async function Blog() {
  await connectDB(); // function from db.ts before

  try {
    // query for all blogs and sort by date
    const blogs = await blogSchema.find().sort({ date: -1 }).orFail();
    // send a response as the blogs as the message
    return blogs;
  } catch (err) {
    return null;
  }
}
