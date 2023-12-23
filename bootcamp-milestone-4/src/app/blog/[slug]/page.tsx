import style from "./page.module.css";
import BlogPost from "../../components/blogPost.tsx";
import ReactMarkdown from "react-markdown"; // Good for wanting the flexibility of markdown
import { IComment } from "@/database/blogSchema.ts";
import Comment, { CommentProps } from "@/app/components/commentPost.tsx"
import { Key } from "react";
import CommentSection from "@/app/components/commentSection.tsx";

// My old way of getting params for personal notes
// type Props = {
//     params: { slug: string}
// }
// { params }: Props

type Props = {
  params: { slug: string };
};



async function getBlog(slug : string) {
  try { // If any errors pop up, they will be caught
    const res = await fetch(`http://localhost:3000/api/blogs/${slug}`, {
      cache: "no-store", // So every time the page loads, it will have to recall the api (so new blogs will show up)
    })
    if (!res.ok) {
      throw new Error("Failed to fetch blog.") // error if we didn't get the data
    }
    return res.json() // return the fetched data as JSON
  } catch (error : unknown) {
    console.log(`error: ${error}`)
    return null
  } 
}

  // Fix the date so it is correctly being shown
  const parseDate = (date: string) => {
    let tLocation = date.indexOf("T")
    let newDate = date.slice(0, tLocation)
    let year = newDate.slice(2, newDate.indexOf("-"))
        newDate = newDate.slice(newDate.indexOf("-") + 1, newDate.length)
    let month = newDate.slice(0, newDate.indexOf("-"))
        newDate = newDate.slice(newDate.indexOf("-") + 1, newDate.length)
    let day = newDate.slice(0, newDate.length)
  
    const dateFormated = `${month}/${day}/${year}`
    return dateFormated
    // Getting
    // 2023-11-03
    // Desired
    // 11/03/23
  }

// export default async function IndvidualBlog({params} : {slug : string}) { Way done in bootcamp, my way just gets the slug straight out of params, the bootcamp gets params, and then we have to pick and choose what to take out via params.___}
export default async function IndvidualBlog({ params: { slug } }: Props) {
  // Handle the null case (I kind of did this a bit different than normal)
  
  if (await getBlog(slug) == null) {   // Handle the null case
    return(
      <div className={style.errorBlock}>
      <h1>Blog Post</h1>
      <h3 className={style.error}><ReactMarkdown>**Error 404**: *Blog Not Found*</ReactMarkdown></h3>
      </div>
      // Don't give any blogs
    )
  }

  const  {blog}  = await getBlog(slug); // get the blogs
  blog.date = parseDate(blog.date); // So the date is in the format we want
  console.log(blog)
  if (blog.comments == null) {
    return ( 
      <>
      <h1>Blog Post</h1>
      <BlogPost {...blog} />
      </>
      )
  }

  return ( 
      <>
      <h1>Blog Post</h1>
      <BlogPost {...blog} />
      {/* comment Logic */}
      <br/>
      <h1>Discussion</h1>
      <CommentSection slug={"blogs/" + slug}></CommentSection>
      {blog.comments.map((comment : IComment, index: Key | null | undefined ) => (
        <Comment key={index} comment={comment} />
      ))}
  
      </>

  )
}


            


  {/* Ok... now what?? We still have to return something. A blog not found
    would be a graceful way to handle this */}






// {blogs.map( (comment : IComment) => {
//   blog.date = (blog.date);
//   return (<BlogPreview 
//             {...blog}
//             key={blog.slug}
//           />
//           )}
//           )}

      {/* { blog.comments.length != 0 ? <h1>Comments</h1> : null}
      
      {
        blog.comments.map( (comment : IComment) => {
        })

        for (let c = 0; c < blog.comments.length; c++) {    
          <Comment {comment} />
        }
      } */}