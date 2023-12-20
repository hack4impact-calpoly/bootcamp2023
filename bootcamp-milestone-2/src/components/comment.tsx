import type { IComment } from "../database/blogSchema"
import style from "./comment.module.css"

{/* When we pass props, the name that we use to pass values
		is the key for the type
*/}

type CommentProps = {
    comment: IComment;
}


{/* Modularizing code into seperate functions is useful.
		Makes your code look nicer and allows for better readability.
	*/}
function parseCommentTime(time: Date) {
    let timeP = new Date(time);
    const formattedT = timeP.toLocaleDateString("en", {
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "numeric",
        minute: "2-digit",
        hour12: true,
    });

    return formattedT;
    }

function Comment({ comment }: CommentProps) {
    return (
        <div>
            <h4 className="User">{comment.user}</h4>
            <p className="comment">{comment.comment}</p>
            <span className="time">{parseCommentTime(comment.time)}</span>
        </div>
    );
}

export default Comment;