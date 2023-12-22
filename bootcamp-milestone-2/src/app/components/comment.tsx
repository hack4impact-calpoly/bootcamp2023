import React from "react";
import type { IComment } from "../database/commentSchema";
import style from "./comment.module.css";

{
  /* When we pass props, the name that we use to pass values
		is the key for the type
*/
}
type CommentProps = {
  comment: IComment;
};

{
  /* Modularizing code into seperate functions is useful.
		Makes your code look nicer and allows for better readability.
	*/
}
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
