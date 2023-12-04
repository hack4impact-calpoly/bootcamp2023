import { IComment } from "../database/blogSchema";
import styles from "./comment.module.css";


{/* When we pass props, the name that we use to pass values
		is the key for the type
*/}

type CommentProps = {
    comment: IComment;
}


{/* Modularizing code into seperate functions is useful.
		Makes your code look nicer and allows for better readability.
	*/}
function parseCommentTime(time: Date){
	return new Date(time).toLocaleString('en-US', {
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
        <div className = {styles.commentPost}>
            <h2 className={styles.user}>{comment.user} - {parseCommentTime(comment.time)}</h2>
            <p>{comment.comment}</p>
        </div>
    );
}

export default Comment;