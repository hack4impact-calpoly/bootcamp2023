"use client";
import React, { useState, useEffect } from "react";
import { IBlog, IComment } from "@/app/database/blogSchema";
import styles from "./blogview.module.css";
import Comment from "@/app/components/comment";
import CommentSection from "@/app/components/comment/CommentSection";

type Props = {
  params: { slug: string };
};

export default function Blog({ params: { slug } }: Props) {
  const [blog, setBlog] = useState<IBlog | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchBlog() {
      setIsLoading(true);
      setError(null);
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/blog/${slug}`,
          {
            cache: "no-store",
          }
        );

        if (!res.ok) {
          throw new Error("Failed to fetch blog");
        }

        const data = await res.json();
        setBlog(data);
      } catch (err) {
        console.error(`error: ${err}`);
        setError("Failed to load blog");
      } finally {
        setIsLoading(false);
      }
    }

    fetchBlog();
  }, [slug]);

  async function createComment(
    commentText: string,
    username: string
  ): Promise<boolean> {
    if (!username || !commentText) {
      return false;
    }

    const formData = new FormData();
    formData.append("comment", commentText);
    formData.append("user", username);

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/blog/${slug}/comment`,
        {
          method: "POST",
          body: formData,
        }
      );

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

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className={styles.blogView}>
      {blog ? (
        <div className={styles.blogContent}>
          <h1 className={styles.blogTitle}>{blog.title}</h1>
          <p className={styles.blogDate}>
            {new Date(blog.date).toLocaleDateString()}
          </p>
          <p className={styles.blogDescription}>{blog.description}</p>
          <div className={styles.blogBody}>{blog.content}</div>
          <CommentSection
            comments={blog.comments}
            createComment={createComment}
          />
        </div>
      ) : (
        <p className={styles.blogNotFound}>Blog not found</p>
      )}
    </div>
  );
}
