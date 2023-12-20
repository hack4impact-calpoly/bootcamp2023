"use client";
import React, { useState, useEffect } from "react";
import { IBlog, IComment } from "@/app/database/blogSchema"; // Adjust the import path as needed
import styles from "./blogview.module.css"; // Adjust the import path as needed

type Props = {
  params: { slug: string };
};

type CommentProps = {
  comment: IComment;
};

function Comment({ comment }: CommentProps) {
  return (
    <div className={styles.comment}>
      <p className={styles.commentUser}>{comment.user}</p>
      <p className={styles.commentText}>{comment.comment}</p>
      <small className={styles.commentDate}>
        {new Date(comment.time).toLocaleDateString()}
      </small>
    </div>
  );
}

export default function Blog({ params: { slug } }: Props) {
  const [blog, setBlog] = useState<IBlog | null>(null);
  const [username, setUsername] = useState("");
  const [commentText, setCommentText] = useState("");
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

  async function createComment(event: any) {
    event.preventDefault();

    if (!username || !commentText) {
      return;
    }

    const comment = {
      user: username,
      comment: commentText,
    };

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
      setUsername("");
      setCommentText("");
    } catch (err) {
      console.error(`error: ${err}`);
      setError("Failed to create comment");
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
          <div className={styles.blogComments}>
            {blog.comments.map((comment: IComment, index: number) => (
              <Comment key={index} comment={comment} />
            ))}
          </div>
          <form className={styles.commentForm} onSubmit={createComment}>
            <textarea
              className={styles.usernameInput}
              placeholder="Enter username."
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            ></textarea>

            <textarea
              className={styles.commentInput}
              placeholder="Write a comment..."
              value={commentText}
              onChange={(e) => setCommentText(e.target.value)}
            ></textarea>

            <button className={styles.commentButton} type="submit">
              Submit
            </button>
          </form>
        </div>
      ) : (
        <p className={styles.blogNotFound}>Blog not found</p>
      )}
    </div>
  );
}
