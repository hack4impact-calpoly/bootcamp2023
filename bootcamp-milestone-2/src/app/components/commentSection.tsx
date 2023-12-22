"use client";
import { useState } from "react";
import { IComment } from "../database/commentSchema";
import style from "./commentsection.module.css";
import { parseCommentTime } from "./comment";

type CommentProps = {
  comment: IComment;
};

function Comment({ comment }: CommentProps) {
  return (
    <div className={style.commentSection}>
      <div className={style.user}>
        <h4>{comment.user}</h4>
        <small className={style.date}>{parseCommentTime(comment.time)}</small>
      </div>
      <p className={style.comment}>{comment.comment}</p>
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
      <div className={style.newComments}>
        <form onSubmit={onCommentCreate} className={style.new}>
          <textarea
            className={style.newName}
            placeholder="Enter (user)name."
            value={username}
            rows={1}
            onChange={(e) => setUsername(e.target.value)}
          ></textarea>

          <textarea
            className={style.newComment}
            placeholder="Type a comment."
            rows={3}
            value={commentText}
            onChange={(e) => setCommentText(e.target.value)}
          ></textarea>

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default CommentSection;
