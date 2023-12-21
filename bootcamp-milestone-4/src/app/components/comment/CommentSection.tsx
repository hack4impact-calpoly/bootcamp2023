"use client";

import { useEffect, useState } from "react";
import { IComment } from "../../database/blogSchema";
import styles from "./commentsection.module.css";

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

function CommentSection({
  comments,
  createComment,
}: {
  comments: IComment[];
  createComment: (commentText: string, username: string) => Promise<boolean>;
}) {
  const [username, setUsername] = useState("");
  const [commentText, setCommentText] = useState("");

  async function onCommentCreate(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const success = await createComment(commentText, username);
    if (success) {
      setUsername("");
      setCommentText("");
    }
  }

  return (
    <div>
      <div className={styles.commentContainer}>
        {comments.map((comment: IComment, index: number) => (
          <Comment key={index} comment={comment} />
        ))}
      </div>
      <form className={styles.commentForm} onSubmit={onCommentCreate}>
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
  );
}

export default CommentSection;
