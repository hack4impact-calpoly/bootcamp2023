import { IComment } from "@/database/blogSchema";
import style from './comment.module.css'
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
function parseCommentTime(time: Date) {
    /*
          Implementation up to you...
      */
    return new Date(time).toLocaleString("en-US", {
        month: "numeric",
        day: "2-digit",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
    });
}

function Comment({ comment }: CommentProps) {
    return (
        <div className={style.CommentWrapper}>
                <h4>{comment.user}</h4>
                <span>{parseCommentTime(comment.time)}</span>
                <p>{comment.comment}</p>
        </div >

    );
}

export default Comment;
