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
	/*
		Implementation up to you...
	*/
    const fDate = new Date(time).toLocaleString('en-US', {
        weekday: 'long', // Display full weekday name
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        hour12: true,
      });

    return fDate;
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