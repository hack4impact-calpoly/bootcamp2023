"use client";
import React, { useState, useEffect } from "react";
import style from "../blog.module.css";
import Image from "next/image";
import Comment from "@/app/components/comment";
import CommentSection from "@/app/components/commentSection";
import { IBlog } from "../../database/blogSchema";
import { IComment } from "../../database/commentSchema";

type Props = {
  slug: string;
};

export default function Blog({ params }: { params: { slug: string } }) {
  const slug = params?.slug;
  const [blog, setBlog] = useState<IBlog | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function getBlog() {
      setError(null);

      // Check if slug is defined before making the fetch request
      if (slug) {
        try {
          // Use encodeURI to handle potential special characters in the slug
          const apiUrl = `${process.env.NEXT_PUBLIC_API_URL}/blog/${encodeURIComponent(
            slug
          )}`;
          console.log("Fetching blog with URL:", apiUrl);

          const res = await fetch(apiUrl, {
            cache: "no-store",
          });

          if (!res.ok) {
            throw new Error(`Failed to fetch blog. Status: ${res.status}`);
          }

          const data = await res.json();
          setBlog(data);
        } catch (err: unknown) {
          console.error("Error:", err);
          setError("Failed to load blog");
        }
      }
    }

    getBlog();
  }, [slug]);

  async function createComment(
    commentText: string,
    user: string
  ): Promise<boolean> {
    if (!user || !commentText) {
      return false;
    }

    const formData = new FormData();
    formData.append("comment", commentText);
    formData.append("user", user);
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/blog/${slug}/comment`, {
        method: "POST",
        body: formData,
      });
      if (!res.ok) {
        throw new Error("Failed to create comment");
      }
      const data = await res.json();
      setBlog(data);
      return true;
    } catch (err) {
      return false;
    }
  }

  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      {blog ? (
        <div>
          <h1>{blog.title}</h1>
          <p>{new Date(blog.date).toLocaleDateString()}</p>
          <p>{blog.description}</p>
          <div>
            {blog.comments.map((comment: IComment, index: number) => (
              <Comment key={index} comment={comment} />
            ))}
          </div>
          <CommentSection
            comments={blog.comments}
            createComment={createComment}
          />
        </div>
      ) : (
        <p>Blog not found.</p>
      )}
    </div>
  );
}

// if (blog == null) {
//   return (
//     <main>
//       <p>Blog not found.</p>
//     </main>
//   );
// } else {
//   return (
//     <main>
//       <div>
//         <h1 className={style.pageTitle}>{blog.title}</h1>
//         <div className={style.blog}>
//           <Image src={blog.image} alt="" height={300} width={250}></Image>
//           <p>{blog.content}</p>
//         </div>
//       </div>
//       <div className={style.comments}>
//         <h2 className={style.commentTitle}>Comments</h2>
//         {blog.comments.map(
//           (comment: any, index: React.Key | null | undefined) => (
//             <Comment key={index} comment={comment} />
//           )
//         )}

//         <div className={style.newComments}>
//           <form className={style.new}>
//             <input
//               type="text"
//               className={style.newName}
//               name="name"
//               placeholder="Name"
//             />
//             <textarea
//               className={style.newComment}
//               rows={5}
//               id={style.message}
//               name="message"
//               placeholder="Type your comment here"
//             ></textarea>
//             <button type="submit" className={style.button}>
//               Submit
//             </button>
//           </form>
//         </div>
//       </div>
//     </main>
//   );
// }
