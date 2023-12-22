{
  /* When we pass props, the name that we use to pass values
		is the key for the type
*/
}
type IComment = {
  user: string;
  comment: string;
  time: Date;
};

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
}

function Comment({ comment }: CommentProps) {
  return (
    <div className="comment">
      <h4 className="author">{comment.user}</h4>
      <p className="content">{comment.comment}</p>
      <span className="timestamp">{comment.time.toLocaleString()}</span>
    </div>
  );
}

export default Comment;
