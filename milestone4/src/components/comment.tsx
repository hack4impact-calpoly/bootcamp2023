import { IComment } from "@/database/blogSchema";
import style from "./comment.module.css";

{/* When we pass props, the name that we use to pass values
		is the key for the type
*/}
type CommentProps = {
    comment: IComment;
}


{/* Modularizing code into seperate functions is useful.
		Makes your code look nicer and allows for better readability.
	*/}

export function parseCommentTime(time: Date){
	return new Date(time).toLocaleDateString('en-US', 
    { 
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        hour12: true
     })
}

function Comment({ comment }: CommentProps) {
    return (
        <div className={style.comment}>
            <div className={style.top}>
                <h4 className={style.user}> {comment.user} </h4>
                <span className={style.time} >{parseCommentTime(comment.time)}</span>
            </div>
            <p>{comment.comment}</p>
        </div>
    );
}

export default Comment;