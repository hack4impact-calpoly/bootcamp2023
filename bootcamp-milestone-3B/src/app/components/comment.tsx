import React from "react";
import { IComment } from "../../database/blogSchema";
import style from "./comment.module.css";

type CommentProps = {
  comment: IComment;
};

function parseComentTime(time: Date) {
  return time.toDateString();
}

export default function Comment({ comment }: CommentProps) {
  return (
    <div className={style.comment_container}>
      <h4 className={style.comment_title}>{comment.user}</h4>
      <p className={style.comment_description}>
        {parseComentTime(comment.time)}
      </p>
      <span className={style.comment_comment}>{comment.comment}</span>
    </div>
  );
}
