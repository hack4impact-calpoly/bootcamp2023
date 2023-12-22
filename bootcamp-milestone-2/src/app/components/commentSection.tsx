"use client";
import { useState } from "react";
import { IComment } from "../database/commentSchema";
// import styles from "./commentsection.module.css";

type CommentProps = {
  comment: IComment;
};

function Comment({ comment }: CommentProps) {
  return (
    <div>
      <p>{comment.user}</p>
      <p>{comment.comment}</p>
      <small>{new Date(comment.time).toLocaleDateString()}</small>
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
        <div>
          {comments.map((comment: IComment, index: number) => (
            <Comment key={index} comment={comment} />
          ))}
        </div>
        <form onSubmit={onCommentCreate}>
          <textarea
            placeholder="Enter (user)name."
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          ></textarea>
  
          <textarea
            placeholder="Type a comment."
            value={commentText}
            onChange={(e) => setCommentText(e.target.value)}
          ></textarea>
  
          <button type="submit">
            Submit
          </button>
        </form>
      </div>
    );
  }
  
  export default CommentSection;