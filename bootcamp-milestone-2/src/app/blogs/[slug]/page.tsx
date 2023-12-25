import { IParams } from "../../api/blog/[slug]/route";
import connectDB from "@/helpers/db";
import Comment from "../../../components/commentPreview";
import { IComment } from "@/database/blogSchema";
import { Key } from "react";
import Image from "next/image";
import style from "../../home.module.css";
import dynamic from "next/dynamic";

import CommentForm from "../../../components/CommentFormBlog";


async function getBlog(slug: string) {
  try {
    const hostname =  'localhost:3000' || process.env.VERCEL_URL  // Default to localhost for local development
    const protocol = process.env.VERCEL_ENV === 'production' ? 'https' : 'http';
    const apiUrl = `bootcamp-project-2023-taupe.vercel.app/api/blog/${slug}`;
    console.log('-------Got the URL --------------' + apiUrl);

    const res = await fetch(apiUrl, {
      cache: "no-store",
    });
    const data = await res.json();

    if (!res.ok) {
      console.log(res)
      throw new Error("Failed to fetch blog");
    }

    return data;
  } catch (err: unknown) {
    console.log(`error: ${err}`);
    return null;
  }
}

// ... (existing imports)

export default async function Blog(props: IParams) {
  
  return (
    <div>
      <h1>hello blog page</h1>
    </div>
  )
  
  const slug: string = props.params.slug;
  const blog = await getBlog(slug);

  if (blog) {
    const centerStyles: React.CSSProperties = {
      textAlign: "center",
    };

    const contentStyles: React.CSSProperties = {
      whiteSpace: "pre-line",
      marginLeft: "100px",
      maxWidth: "800px", // Adjust the maximum width as needed
      margin: "0 auto",
      marginTop: "20px",
      marginBottom: "20px",
    };

    return (
      <div>
        <div style={contentStyles}>
          <div className={style.about}>
            <div className={style.abouttext}>
              <h1>{blog.title}</h1>
              <p>Date: {new Date(blog.date).toLocaleDateString()}</p>

              <div>
                <p>{blog.description}</p>

                <Image
                  src={"/" + blog.image}
                  alt="img"
                  width={600}
                  height={400}
                ></Image>

                <div style={contentStyles}>{blog.content}</div>

                <h2>Comments</h2>
                <div>
                  {Array.isArray(blog.comments) ? (
                    blog.comments.map((comment: IComment, index: number) => (
                      <Comment key={index} comment={comment} />
                    ))
                  ) : (
                    <p>No comments available.</p>
                  )}

                  <CommentForm
                    usernameprop=""
                    commentTextprop=""
                    blogSlug={slug}
                  ></CommentForm>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={style.footer}>
          <footer>
            © 2023 My Personal Website | All Rights Reserved | Made with love ♥
          </footer>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <p>Blog not found.</p>
      </div>
    );
  }
}
