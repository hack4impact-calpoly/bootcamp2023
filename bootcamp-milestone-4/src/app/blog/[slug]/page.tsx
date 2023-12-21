"use client";
import React, { useState, useEffect } from "react";
import { IBlog } from "@/app/database/blogSchema";
import styles from "./blogview.module.css";
import CommentSection from "@/app/components/comment/CommentSection";
import LoadingSpinner from "@/app/components/LoadingSpinner";
import toast from "react-hot-toast";

type Props = {
  params: { slug: string };
};

export default function Blog({ params: { slug } }: Props) {
  const [blog, setBlog] = useState<IBlog | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchBlog() {
      setIsLoading(true);
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
        toast.error("Failed to fetch blog");
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
      toast.success("Comment created!");
      return true;
    } catch (err) {
      toast.error("Failed to create comment!");
      return false;
    }
  }

  if (isLoading) return <LoadingSpinner />;

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
          <hr/>
          <h2>Comments</h2>
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
