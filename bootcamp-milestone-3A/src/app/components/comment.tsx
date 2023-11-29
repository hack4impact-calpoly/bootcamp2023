import React from "react";
import { IComment } from "../../database/blogSchema";
import style from "./comment.module.css";

export default function Comment(props: IComment) {
  return (
    <div className={style.comment_container}>
      <div className={style.comment_info_container}>
        <h5 className={style.comment_title}>{props.user}</h5>
        <p className={style.comment_description}>
          {new Date(props.time).toDateString()}
        </p>
      </div>
      <div className={style.comment_comment}>{props.comment}</div>
    </div>
  );
}
