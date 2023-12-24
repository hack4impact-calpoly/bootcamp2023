"use client";
import React, { useState, useEffect } from "react";
import style from "../blog.module.css";
import Image from "next/image";
import CommentSection from "@/components/commentSection";
import { IBlog } from "@/database/blogSchema";

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
          const apiUrl = `${
            process.env.NEXT_PUBLIC_API_URL
          }/blog/${encodeURIComponent(slug)}`;
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
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/blog/${slug}/comment`,
        {
          method: "POST",
          body: formData,
        }
      );
      if (!res.ok) {
        throw new Error("Failed to create comment.");
      }
      const data = await res.json();
      setBlog(data);
      return true;
    } catch (err) {
      setError("Failed to create comment.");
      return false;
    }
  }

  if (error) return <p>{error}</p>;

  return (
    <div>
      {blog ? (
        <div>
          <h1 className={style.pageTitle}>{blog.title}</h1>
          <div className={style.blog}>
            <p>{blog.description}</p>
            <Image src={blog.image} alt="" width={350} height={300}></Image>
            <p>{blog.content}</p>
          </div>
          <div>
            <div className={style.comments}>
              <h2 className={style.commentTitle}>Comments</h2>
              <CommentSection
                comments={blog.comments}
                createComment={createComment}
              />
            </div>
          </div>
        </div>
      ) : (
        <p>Blog not found.</p>
      )}
    </div>
  );
}
























// import BlogPreview from "@/components/blogPreview";
// import BlogModel from "@/database/blogSchema";
// import connectDB from "@/helpers/db";

// type Props = {
//     slug: string;
// };

// async function getBlogBySlug(slug: string) {
//     await connectDB();

//     try {
// 		const res = await fetch(`http://localhost:3000/blog/{slug}`, {
// 			cache: "no-store",	
// 		})

// 		if (!res.ok) {
// 			throw new Error("Failed to fetch blog");
// 		}

// 		return res.json();
// 	} catch (err: unknown) {
// 		console.log(`error: ${err}`);
// 		return null;
// 	}

// }

// export default async function Blog( {slug} : Props) {
//     const blog = await getBlogBySlug(slug);

//     return (
//         <main>
//             {blog ? (
//                 <div>
//                     <BlogPreview {...blog.toObject()} />
                    
//                 </div>
//             ) : (
//                 <div className="page-title" >No Blog Found</div>
//             )}
//         </main>
//     );
// }