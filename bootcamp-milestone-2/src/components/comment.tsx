import type { IComment } from "../database/blogSchema"
import style from "./comment.module.css"

type CommentProps = {
    comment: IComment;
}


{/* Modularizing code into seperate functions is useful.
		Makes your code look nicer and allows for better readability.
	*/}
function parseCommentTime(time: Date){
    {
        let newTime = new Date(time);
        const format = newTime.toLocaleDateString("en", {
            year: "numeric",
            month: "long",
            day: "numeric",
            hour: "numeric",
            minute: "2-digit",
            hour12: true,
        });
    
        return format;
        }
}

function Comment({ comment }: CommentProps) {
    return (
        <div>
            <h4>{comment.user}</h4>
            <p>{comment.comment}</p>
            <span>{parseCommentTime(comment.time)}</span>
        </div>
    );
}

export default Comment;
​
