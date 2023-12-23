import { IComment } from '../database/blogSchema';
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
  const time2=new Date(time)
  const time_as_str=time2.toLocaleDateString('en-us', {year:"numeric", month:"short", day:"numeric", hour:"2-digit", minute:"2-digit"})
  return time_as_str
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