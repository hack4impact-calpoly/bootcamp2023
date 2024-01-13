import { IComment } from "../database/blogSchema";
import style from "./comments.module.css";

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
function parseCommentTime(date: Date) {
  return new Date(date).toLocaleString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });
}

function Comment({ comment }: CommentProps) {
  return (
    <div className={style.blogcomment}>
      <p>
        <b>{comment.user}</b>
      </p>
      <p>{comment.comment}</p>
      <span>{parseCommentTime(comment.date)}</span>
    </div>
  );
}

export default Comment;