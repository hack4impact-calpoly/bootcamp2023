import { IComment } from "@/database/blogSchema";


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

    const year: number = time.getFullYear();
    const month: number = time.getMonth() + 1; // Months are zero-based
    const day: number = time.getDate();

    return `${month}/${day}/${year}`

}

function Comment({ comment }: CommentProps) {
    return (
        <div className="comment">
            <h4 className="user">{comment.user}</h4>
            <p className="comment">{comment.comment}</p>
            <p></p>
            <span className="time">{parseCommentTime(new Date(comment.time))}</span>
        </div>
    );
}

export default Comment;