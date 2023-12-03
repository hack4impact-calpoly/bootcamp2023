import style from "./comment.module.css";

type IComment = {
  user: string;
  comment: string;
  time: Date;
};

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
    const formatted = time.toLocaleDateString("en", {
        year: "numeric",
        month: "long",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
    })
    console.log(formatted);
    return formatted;
}

function Comment({ comment }: CommentProps) {
    return (
        <div className={style.container}>
            <h4 className={style.user}>{comment.user}</h4>
            <p className={style.comment}>{comment.comment}</p>
            <span className={style.time}>{parseCommentTime(comment.time)}</span>
        </div>
    );
}

export default Comment;