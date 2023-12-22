import React from "react";
import type { IComment } from "../database/commentSchema";
import style from "./comment.module.css";

type CommentProps = {
  comment: IComment;
};

export function parseCommentTime(time: Date) {
  let timeP = new Date(time);
  const formattedT = timeP.toLocaleDateString("en", {
    year: "numeric",
    month: "numeric",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });
  return formattedT;
}

function Comment({ comment }: CommentProps) {
  return (
    <div className={style.commentSection}>
      <div className={style.user}>
        <h4>{comment.user}</h4>
        <span className={style.date}>{parseCommentTime(comment.time)}</span>
      </div>
      <p className={style.comment}>{comment.comment}</p>
    </div>
  );
}

export default Comment;
