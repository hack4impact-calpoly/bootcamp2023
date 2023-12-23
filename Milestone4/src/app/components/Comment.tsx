import { IComment } from "../database/commentSchema";
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
  const myTime = new Date(
    time.toLocaleString("en-US", { timeZone: "America/Los_Angeles" })
  );
  const formattedTime = myTime.toLocaleString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });
  return formattedTime;
}

function Comment({ comment }: CommentProps) {
  return (
    <div className="comment">
      <h4 className="CommentUsername">{comment.user}</h4>
      <p className="CommentParagraph">{comment.comment}</p>
      <div className="CommentDate">{parseCommentTime(comment.date)}</div>
    </div>
  );
}

export default Comment;
